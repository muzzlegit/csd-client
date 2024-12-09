import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { getInitialSwitchesList } from "modules/switches/utils/helpers";
import SWITCHES from "../../data/vector.json";

const useItemsList = () => {
  const setQueryItem = useSwitchesStore((state) => state.setQueryItem);
  const list = getInitialSwitchesList(SWITCHES);

  const handleItemClick = (item) => {
    setQueryItem(item);
  };

  return { list, handleItemClick };
};

export default useItemsList;
