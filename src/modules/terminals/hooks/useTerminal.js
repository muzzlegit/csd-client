import { useTerminalsStore } from "../store/useTerminalsStore";

export const useTerminal = () => {
  const terminal = useTerminalsStore((state) => state.queryItem);

  return { terminal };
};
