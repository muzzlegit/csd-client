import {
  ActiveFilterFromScheme,
  FilterScheme,
  FiltersFromScheme,
  Manufacturer,
  ProductListType,
  ProductUnit,
  ProductsLine,
} from "features/Product-Choice/types/types";
import { fetchProductByArticleShort } from "lib/api/apiService";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "../../SearchItem/useQuery";

export const useSelector = (
  manufacturers: Array<Manufacturer>,
  filterScheme: FilterScheme,
  productKey: ProductsLine
) => {
  const [activeFilter, setActiveFilter] = useState<ActiveFilterFromScheme>({});
  const { handleFetchProductByArticle } = useQuery();
  const [productsList, setProductsList] = useState<ProductListType>([]);

  const products = useMemo(() => {
    return manufacturers.reduce<ProductListType>((acc, manufacturer) => {
      const series = manufacturer.products[productKey];
      if (!Array.isArray(series)) return acc;
      return [...acc, ...series.flatMap((el) => el?.list ?? [])];
    }, []);
  }, [manufacturers, productKey]);

  const filters: FiltersFromScheme = useMemo(() => {
    const clonedFilterScheme = JSON.parse(JSON.stringify(filterScheme));

    return products.reduce((acc, element) => {
      for (const key in acc) {
        const filterKey = key as keyof FilterScheme;
        const value = element?.[key as keyof ProductUnit];
        if (
          (typeof value === "string" || typeof value === "number") &&
          Array.isArray(acc[filterKey].values) &&
          !acc?.[filterKey]?.values.includes(value)
        ) {
          acc[filterKey].values.push(value);
        }
      }
      return acc;
    }, clonedFilterScheme);
  }, [filterScheme, products]);

  const handleFilterSelectorClick = <K extends keyof FiltersFromScheme>(
    title: K,
    value: FiltersFromScheme[K]["values"][number]
  ) => {
    setActiveFilter((prev) => {
      const newValue = prev?.[title] === value ? null : value;
      return { ...prev, [title]: newValue };
    });
  };

  useEffect(() => {
    const updateProducts = async () => {
      const list = products.filter((el) => {
        return Object.entries(activeFilter).every(([filter, value]) => {
          if (!value) return true;
          return el?.[filter as keyof ProductUnit] === value;
        });
      });

      if (list.length < 5 && list.length > 0) {
        const updatedList = await Promise.all(
          list.map(async (product) => {
            const result = await fetchProductByArticleShort(product.article);
            return result || product;
          })
        );
        setProductsList(updatedList);
      } else {
        setProductsList(list);
      }
    };
    updateProducts();
  }, [activeFilter]);
  return {
    filters,
    activeFilter,
    productsList,
    handleFetchProductByArticle,
    handleFilterSelectorClick,
  };
};
