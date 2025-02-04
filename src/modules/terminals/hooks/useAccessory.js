import { useTerminalsStore } from "../store/useTerminalsStore";

export const useAccessory = () => {
  const accessory = useTerminalsStore((state) => state.selectedAccessory);

  return { accessory };
};
