import { useCallback, useMemo } from "react";
//Data
import BASE from "modules/switches/data/vector.json";

const useSwitchesData = () => {
  const VECTOR = useMemo(() => {
    let itemsArray = [];
    for (const key in BASE) {
      itemsArray = [...itemsArray, ...BASE[key]];
    }
    return itemsArray;
  }, []);

  const getItemById = (id) => {
    const [queryItem] = VECTOR.filter(
      (item) => item.code.toLowerCase() === id.toLowerCase()
    );
    if (queryItem) {
      return queryItem;
    } else return false;
  };
  const getFilteredItemsByProperty = useCallback(
    (property, value) => {
      if (value === "all") return VECTOR;
      return VECTOR.filter((item) => item[property] === value);
    },
    [VECTOR]
  );

  return { VECTOR, getItemById, getFilteredItemsByProperty };
};

export default useSwitchesData;
