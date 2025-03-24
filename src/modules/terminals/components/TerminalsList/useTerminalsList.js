import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { useEffect, useMemo, useRef } from "react";

export const useTerminalsList = () => {
  const list = useTerminalsStore((state) => state.terminalsList);
  const favorite = useTerminalsStore((state) => state.favorite);
  const color = useTerminalsStore((state) => state.filter.color);
  const accessory = useTerminalsStore((state) => state.filter.accessory);
  const getList = useTerminalsStore((state) => state.getTerminalsList);
  const queryItem = useTerminalsStore((state) => state.queryItem);
  const setQueryItem = useTerminalsStore((state) => state.setQueryItem);
  const setSelectedAccessory = useTerminalsStore(
    (state) => state.setSelectedAccessory
  );
  const getFilterAccessory = useTerminalsStore(
    (state) => state.getFilterAccessory
  );
  const terminalRefs = useRef({});

  const filteredList = useMemo(() => {
    if (accessory !== "") {
      return list.filter((terminal) => {
        let isAccessory = false;
        console.log(terminal);
        terminal?.accessories.forEach((el) => {
          if (el === accessory || el.includes(accessory, 5)) {
            isAccessory = true;
          }
        });
        return isAccessory;
      });
    } else {
      return list.filter((terminal) => {
        if (color) {
          return color === terminal?.features?.color?.value;
        }
        return terminal;
      });
    }
  }, [accessory, color, list]);

  const favoriteList = useMemo(() => {
    return (
      list?.filter((terminal) => favorite?.includes(terminal.article)) ?? []
    );
  }, [favorite, list]);

  const handleItemClick = (article) => {
    const currentList = getList();
    const list = Array.isArray(currentList) ? currentList : [];
    const queryItem = list.find((item) => item.article === article);
    setQueryItem(queryItem ? queryItem : null);
    if (getFilterAccessory() === "") {
      setSelectedAccessory(null);
    }
  };

  useEffect(() => {
    if (queryItem && terminalRefs.current[queryItem.article]) {
      terminalRefs.current[queryItem.article].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [queryItem]);

  return { filteredList, favoriteList, handleItemClick, terminalRefs };
};
