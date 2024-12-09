import { getInitialSwitchesList } from "modules/switches/utils/helpers";
import { useState } from "react";
import { getSortedUniqueValuesByProperty } from "shared/helpers";
import SWITCHES from "../../data/vector.json";

const properties = ["manufacturer", "section", "series", "current", "pole"];

const createFilterOptions = (switchesList) => {
  const list = getInitialSwitchesList(switchesList);
  return properties.reduce((acc, property) => {
    acc[property] = getSortedUniqueValuesByProperty(property, list).map(
      (item) => ({
        label: item.toString(),
        value: item.toString(),
      })
    );
    acc[property].push({ label: "Всі", value: "all" });
    return acc;
  }, {});
};

const initialFilter = properties.reduce((acc, property) => {
  acc[property] = "all";
  return acc;
}, {});

const filtersOptions = createFilterOptions(SWITCHES);

const useFiltersBox = () => {
  const [filters, setFilters] = useState(initialFilter);

  const handleFilters = (e) => {
    const { name, value } = e.currentTarget.dataset;

    if (name) {
      setFilters((prev) => {
        if (prev[name] === value) return prev;
        return { ...prev, [name]: value };
      });
    }
  };

  return { filtersOptions, filters, handleFilters };
};

export default useFiltersBox;
