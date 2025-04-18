import {
  FilterSchemeGeneric,
  Manufacturer,
  ProductListType,
  ProductUnit,
  ProductsLine,
} from "features/Product-Choice/types/types";
import { useMemo, useState } from "react";
import { useQuery } from "../../SearchItem/useQuery";

export const useSelector = <Scheme extends FilterSchemeGeneric>(
  manufacturers: Array<Manufacturer>,
  filterScheme: FilterSchemeGeneric,
  productKey: ProductsLine
) => {
  const [activeFilter, setActiveFilter] = useState<
    Partial<Record<keyof Scheme, string | number>>
  >({});
  const { handleFetchProductByArticle } = useQuery();

  const products = useMemo(() => {
    return manufacturers.reduce<ProductListType>((acc, manufacturer) => {
      const series = manufacturer.products[productKey];
      if (!Array.isArray(series)) return acc;
      return [...acc, ...series.flatMap((el) => el?.list ?? [])];
    }, []);
  }, [manufacturers, productKey]);

  const filters = useMemo(() => {
    const clonedFilterScheme: FilterSchemeGeneric = JSON.parse(
      JSON.stringify(filterScheme)
    );

    return products.reduce((acc, element) => {
      for (const key in acc) {
        const filterKey = key as keyof FilterSchemeGeneric;
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

  const productsList = products.filter((el) => {
    return Object.entries(activeFilter).every(([filter, value]) => {
      if (!value) {
        return true;
      }
      return el?.[filter as keyof ProductUnit] === value;
    });
  });

  const handleFilterSelectorClick = (
    title: keyof Scheme,
    value: string | number
  ) => {
    setActiveFilter((prev) => {
      const newValue = prev?.[title] === value ? null : value;
      return { ...prev, [title]: newValue };
    });
  };

  return {
    filters,
    activeFilter,
    productsList,
    handleFetchProductByArticle,
    handleFilterSelectorClick,
  };
};
