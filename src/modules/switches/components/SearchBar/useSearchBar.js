import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { useEffect, useState } from "react";

const useSearchBar = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const setQueryItem = useSwitchesStore((state) => state.setQueryItem);
  const getList = useSwitchesStore((state) => state.getItemsList);

  const handleQuery = (e) => {
    const value = String(e.currentTarget.value || "").trim();

    setQuery(value);

    const list = Array.isArray(getList()) ? getList() : [];
    const queryItem = list.find((item) => item.code === value);

    setQueryItem(queryItem ? queryItem : null);
    setMessage(queryItem ? "" : "Артикул не знайдено");
  };

  useEffect(() => {
    if (query === "") setMessage("");
  }, [query]);

  return { query, handleQuery, message };
};

export default useSearchBar;
