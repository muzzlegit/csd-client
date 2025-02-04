import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { useMemo } from "react";

export const useTerminalsList = () => {
  const list = useTerminalsStore((state) => state.terminalsList);
  const favorite = useTerminalsStore((state) => state.favorite);
  const color = useTerminalsStore((state) => state.filter.color);
  const getList = useTerminalsStore((state) => state.getTerminalsList);
  const setQueryItem = useTerminalsStore((state) => state.setQueryItem);
  const setSelectedAccessory = useTerminalsStore(
    (state) => state.setSelectedAccessory
  );

  const filteredList = useMemo(() => {
    return list.filter((terminal) => {
      if (color) {
        return color === terminal?.features?.color?.value;
      }
      return terminal;
    });
  }, [color, list]);

  const favoriteList = useMemo(() => {
    return (
      list?.filter((terminal) => favorite?.includes(terminal.article)) ?? []
    );
  }, [favorite, list]);

  const handleItemClick = (article) => {
    const list = Array.isArray(getList()) ? getList() : [];
    const queryItem = list.find((item) => item.article === article);
    setQueryItem(queryItem ? queryItem : null);
    setSelectedAccessory(null);
  };

  return { filteredList, favoriteList, handleItemClick };
};
