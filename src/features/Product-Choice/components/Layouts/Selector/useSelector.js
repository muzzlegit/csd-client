import { useMemo } from "react";
import { useQuery } from "../../SearchItem/useQuery";

const filterScheme = {
  current: { title: "Струм", unit: "A", values: [] },
  pole: { title: "Кількість полюсів", unit: null, values: [] },
};

export const useSelector = (
  activeFilter = {},
  manufacturers,
  filterScheme,
  productKey
) => {
  const { handleFetchItemByArticle } = useQuery();

  const products = useMemo(() => {
    let list = [];
    manufacturers.forEach((manufacturer) => {
      if (!manufacturer?.products?.[productKey]) return;
      list = [
        ...list,
        ...manufacturer.products[productKey].flatMap((el) => el?.list ?? []),
      ];
    });
    return list;
  }, [manufacturers, productKey]);

  const filters = useMemo(() => {
    const list = JSON.parse(JSON.stringify(filterScheme));

    products.forEach((element) => {
      for (const key in list) {
        if (
          element?.[key] &&
          list?.[key]?.values &&
          !list?.[key]?.values.includes(element[key])
        ) {
          list[key].values.push(element[key]);
        }
      }
    });
    return list;
  }, [filterScheme, products]);

  const list = products.filter((el) => {
    return Object.entries(activeFilter).every(([filter, value]) => {
      if (!value) {
        return true;
      }
      return el?.[filter] === value;
    });
  });

  return { filters, list, handleFetchItemByArticle };
};
