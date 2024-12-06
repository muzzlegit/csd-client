import { useEffect, useMemo, useState } from "react";
import useItemsList from "./useItemsList";
import useSwitchesData from "./useSwitchesData";
//CONSTS
const initialFilter = {
  manufacturer: "all",
  section: "all",
  series: "all",
  current: "all",
  pole: "all",
};

export const useFilters = () => {
  const [filter, setFilter] = useState(initialFilter);
  const { getFilteredItemsByProperty } = useSwitchesData();
  const { setItemsList } = useItemsList();
  const { VECTOR } = useSwitchesData();

  const filtersOptions = useMemo(() => {
    const options = VECTOR.reduce(
      (acc, item) => {
        if (!acc.manufacturer.includes(item.manufacturer))
          acc.manufacturer.push(item.manufacturer);
        if (!acc.series.includes(item.series)) acc.series.push(item.series);
        if (!acc.section.includes(item.section)) acc.section.push(item.section);
        if (!acc.current.includes(item.current)) acc.current.push(item.current);
        if (!acc.pole.includes(item.pole)) acc.pole.push(item.pole);
        return acc;
      },
      {
        manufacturer: [],
        series: [],
        section: [],
        current: [],
        pole: [],
      }
    );
    return options;
  }, [VECTOR]);

  useEffect(() => {
    let checker = false;
    let filteredList = [];
    for (const key in filter) {
      if (!checker) {
        filteredList = getFilteredItemsByProperty(key, filter[key]);

        checker = true;
      }
      filteredList = [
        ...filteredList.filter((item) => {
          return filter[key] === "all"
            ? item
            : item[key].toString() === filter[key];
        }),
      ];
    }
    setItemsList(filteredList);
  }, [filter, setItemsList, getFilteredItemsByProperty]);

  const onFilterChange = (id, value) => {
    setFilter((prev) => ({ ...prev, [id]: value }));
  };

  return { filtersOptions, onFilterChange };
};

export default useFilters;
