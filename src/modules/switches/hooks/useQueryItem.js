//HOOKS
import useSwitchesData from "./useSwitchesData";
//STORE
import useSwitchesStore from "../store/useSwitchesStore";

const useQueryItem = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);
  const setQueryItem = useSwitchesStore((state) => state.setQueryItem);
  const { getItemById } = useSwitchesData();

  const setItemByID = (id) => {
    const item = getItemById(id);
    if (item) {
      setQueryItem(item);
    } else {
      setQueryItem({});
    }
  };

  const clearItem = () => {
    setQueryItem({});
  };

  return { queryItem, setItemByID, clearItem };
};

export default useQueryItem;
