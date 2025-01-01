import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";

export const useQueryItem = () => {
  const queryItem = useTerminalsStore((state) => state.queryItem);

  return { queryItem };
};
