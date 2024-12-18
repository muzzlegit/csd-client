import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { FILTERS } from "modules/switches/utils/constants";
import { getSortedUniqueValuesByProperty } from "shared/helpers";
import SWITCHES from "../../data/switches.json";

const createFilterOptions = (switchesList) => {
  return FILTERS.reduce((acc, property) => {
    acc[property] = getSortedUniqueValuesByProperty(property, switchesList).map(
      (item) => ({
        label: item.toString(),
        value: item.toString(),
      })
    );
    acc[property].push({ label: "Всі", value: "all" });
    return acc;
  }, {});
};

const filtersOptions = createFilterOptions(SWITCHES);

const useFiltersBox = () => {
  const filters = useSwitchesStore((state) => state.filters);
  const setFilter = useSwitchesStore((state) => state.setFilter);

  const handleFilters = (e) => {
    const { name, value } = e.currentTarget.dataset;

    if (name) {
      setFilter(name, value);
    }
  };

  return { filtersOptions, filters, handleFilters };
};

export default useFiltersBox;
