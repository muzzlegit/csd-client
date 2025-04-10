import { useQuery } from "../../SearchItem/useQuery";
import switches from "./switches.json";

const filterScheme = {
  manufacturer: { title: "Виробник", unit: null, values: [] },
  series: { title: "Серія", unit: null, values: [] },
  current: { title: "Струм", unit: "A", values: [] },
  pole: { title: "Кількість полюсів", unit: null, values: [] },
};

const filters = (() => {
  const list = { ...filterScheme };
  switches.forEach((element) => {
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

export const useSwitchesSelector = (activeFilter = {}) => {
  const { handleFetchItemByArticle } = useQuery();

  const list = switches.filter((el) => {
    return Object.entries(activeFilter).every(([filter, value]) => {
      if (!value) {
        return true;
      }
      return el?.[filter] === value;
    });
  });

  return { filters, list, handleFetchItemByArticle };
};
