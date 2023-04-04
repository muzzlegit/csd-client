import { useEffect, useState } from "react";
//HELPERS
import getItemFromBaseByCode from "../../helpers/SWITCHES/getItemFromBaseByCode";
//STORE
import useSwitchesStore from "../../data/STORE/useSwitchesStore";

export default function useInput() {
  const setItem = useSwitchesStore((state) => state.setItem);
  const setSelectedRelatedItem = useSwitchesStore(
    (state) => state.setSelectedRelatedItem
  );
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "") setItem({});
  }, [value, setItem]);

  const onChange = (e) => {
    setValue(e.currentTarget.value);
    setSelectedRelatedItem({});
    setItem(getItemFromBaseByCode(e.currentTarget.value));
  };

  return [value, onChange];
}
