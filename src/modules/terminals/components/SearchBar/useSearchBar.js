import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { useEffect, useState } from "react";

const useSearchBar = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const setQueryItem = useTerminalsStore((state) => state.setQueryItem);
  const getList = useTerminalsStore((state) => state.getTerminalsList);

  const handleQuery = (e) => {
    const value = String(e.currentTarget.value || "").trim();
    setQuery(value);
    const list = Array.isArray(getList()) ? getList() : [];
    const queryItem = list.find(
      (item) => item.article === value || item.catalog_article === value
    );
    setQueryItem(queryItem ? queryItem : null);
    setMessage(queryItem ? "" : "Артикул не знайдено");
  };

  useEffect(() => {
    if (query === "") setMessage("");
  }, [query]);

  return { query, handleQuery, message };
};

export default useSearchBar;
