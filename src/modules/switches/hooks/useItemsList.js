import { useEffect } from "react";
//HOOKS
import useSwitchesData from "./useSwitchesData";
//STORE
import useSwitchesStore from "../store/useSwitchesStore";

const useItemsList = () => {
  const itemsList = useSwitchesStore((state) => state.itemsList);
  const setItemsList = useSwitchesStore((state) => state.setItemsList);

  const { VECTOR } = useSwitchesData();

  useEffect(() => {
    setItemsList(VECTOR);
  }, [VECTOR, setItemsList]);

  return { itemsList, setItemsList };
};

export default useItemsList;
