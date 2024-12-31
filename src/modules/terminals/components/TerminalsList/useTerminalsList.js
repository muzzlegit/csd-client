import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { useMemo } from "react";

export const useTerminalsList = () => {
  const list = useTerminalsStore((state) => state.terminalsList);
  const colorIndex = useTerminalsStore((state) => state.colorIndex);

  const filteredList = useMemo(() => {
    return list.filter((terminal) => {
      if (colorIndex) {
        return colorIndex === terminal.color_index;
      }
      return terminal;
    });
  }, [colorIndex, list]);

  return { filteredList };
};
