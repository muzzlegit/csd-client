import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { useMemo } from "react";

const useItemsList = () => {
  const filters = useSwitchesStore((state) => state.filters);
  const setQueryItem = useSwitchesStore((state) => state.setQueryItem);
  const getItemsList = useSwitchesStore((state) => state.getItemsList);

  const filteredItemsList = useMemo(() => {
    return getItemsList().filter((item) =>
      Object.entries(filters).every(([filter, value]) =>
        value === "all" ? true : item?.[filter] === value
      )
    );
  }, [filters, getItemsList]);

  const handleItemClick = (item) => {
    setQueryItem(item);
  };

  return { filteredItemsList, handleItemClick };
};

export default useItemsList;
