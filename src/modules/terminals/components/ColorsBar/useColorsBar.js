import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";

export const useColorsBar = () => {
  const currentColor = useTerminalsStore((state) => state.filter.color);
  const setColor = useTerminalsStore((state) => state.setColor);

  const handleColor = (index) => {
    setColor(currentColor === index ? null : index);
  };

  return { currentColor, handleColor };
};
