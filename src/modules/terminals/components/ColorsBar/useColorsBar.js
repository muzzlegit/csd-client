import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";

export const useColorsBar = () => {
  const currentColorIndex = useTerminalsStore((state) => state.colorIndex);
  const setColorIndex = useTerminalsStore((state) => state.setColorIndex);

  const handleIndex = (index) => {
    setColorIndex(currentColorIndex === index ? null : index);
  };

  return { currentColorIndex, handleIndex };
};
