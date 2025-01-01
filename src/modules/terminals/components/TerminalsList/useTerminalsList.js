import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { useMemo } from "react";

export const useTerminalsList = () => {
  const list = useTerminalsStore((state) => state.terminalsList);
  const color = useTerminalsStore((state) => state.filter.color);
  const getList = useTerminalsStore((state) => state.getTerminalsList);
  const setQueryItem = useTerminalsStore((state) => state.setQueryItem);

  const filteredList = useMemo(() => {
    return list.filter((terminal) => {
      if (color) {
        return color === terminal.color;
      }
      return terminal;
    });
  }, [color, list]);

  const handleItemClick = (article) => {
    const list = Array.isArray(getList()) ? getList() : [];
    const queryItem = list.find((item) => item.article === article);
    setQueryItem(queryItem ? queryItem : null);
  };

  return { filteredList, handleItemClick };
};
