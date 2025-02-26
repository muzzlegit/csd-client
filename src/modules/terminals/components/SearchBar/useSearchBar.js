import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { getAccessoryData } from "modules/terminals/utils/helpers/getAccessoryData";
import { useEffect, useState } from "react";

const useSearchBar = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const queryByAccessory = useTerminalsStore((state) => state.filter.accessory);
  const setQueryItem = useTerminalsStore((state) => state.setQueryItem);
  const setFilterItem = useTerminalsStore((state) => state.setFilterItem);
  const getList = useTerminalsStore((state) => state.getTerminalsList);
  const setSelectedAccessory = useTerminalsStore(
    (state) => state.setSelectedAccessory
  );
  const handleQuery = (e) => {
    setFilterItem("accessory", "");
    const value = String(e.currentTarget.value || "")
      .trim()
      .replaceAll(",", ".");
    setQuery(value);
    if (value?.length < 5) {
      setQueryItem(null);
      return;
    }
    const list = Array.isArray(getList()) ? getList() : [];
    const queryItem = list.find(
      (item) =>
        item.article === value ||
        item.catalog_article === value ||
        item.article.includes(value, 5)
    );
    setQueryItem(queryItem ? queryItem : null);
    setMessage(queryItem ? "" : "Артикул не знайдено");
  };

  const handleQueryByAccessory = (e) => {
    setQuery("");
    setQueryItem(null);
    const value = String(e.currentTarget.value || "")
      .trim()
      .replaceAll(",", ".");
    setFilterItem("accessory", value);
    const accessory = getAccessoryData(value);
    if (accessory) setSelectedAccessory(accessory);
  };

  useEffect(() => {
    if (query === "") setMessage("");
  }, [query]);

  return {
    query,
    handleQuery,
    message,
    queryByAccessory,
    handleQueryByAccessory,
  };
};

export default useSearchBar;
