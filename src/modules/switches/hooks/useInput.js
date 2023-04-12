import { useCallback, useEffect, useState } from "react";
//HOOKS
import useQueryItem from "./useQueryItem";

export const useInput = () => {
  const { setItemByID, clearItem } = useQueryItem();
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (code) => {
      setValue(code.trim());
      setItemByID(code.trim());
    },
    [setItemByID]
  );

  // useEffect(() => {
  //   if (value === "") clearItem();
  // }, [value, clearItem]);

  return { value, onChange };
};
