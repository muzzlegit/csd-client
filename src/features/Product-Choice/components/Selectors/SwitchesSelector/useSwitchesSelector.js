import { technoelectric, telergon } from "features/Product-Choice/data";
import { useQuery } from "../../SearchItem/useQuery";

const filterScheme = {
  current: { title: "Струм", unit: "A", values: [] },
  pole: { title: "Кількість полюсів", unit: null, values: [] },
};

const switchDisconnectors = (() => {
  return [
    ...telergon.products.switchDisconnectors.flatMap((el) => el?.list ?? []),
    ...technoelectric.products.switchDisconnectors.flatMap(
      (el) => el?.list ?? []
    ),
  ];
})();

const filters = (() => {
  const list = { ...filterScheme };
  i;
  switchDisconnectors.forEach((element) => {
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
})();

const manufacturers = [telergon, technoelectric];

export const useSwitchesSelector = (activeFilter = {}) => {
  const { handleFetchItemByArticle } = useQuery();

  const list = switchDisconnectors.filter((el) => {
    return Object.entries(activeFilter).every(([filter, value]) => {
      if (!value) {
        return true;
      }
      return el?.[filter] === value;
    });
  });

  return { filters, manufacturers, list, handleFetchItemByArticle };
};
