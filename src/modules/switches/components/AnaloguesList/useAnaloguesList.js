import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { useMemo } from "react";

const useAnaloguesList = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);
  const setQueryItem = useSwitchesStore((state) => state.setQueryItem);
  const getItemsList = useSwitchesStore((state) => state.getItemsList);

  const analogues = useMemo(() => {
    const itemsList = getItemsList();
    return queryItem
      ? queryItem?.relatedItems.map((item) =>
          itemsList.find((i) => i.code === item.code)
        )
      : [];
  }, [getItemsList, queryItem]);

  const handleItemClick = (item) => {
    if (item) setQueryItem(item);
  };

  return { analogues, handleItemClick };
};

export default useAnaloguesList;
