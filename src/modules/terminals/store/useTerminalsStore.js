import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import terminals from "../data/Terminals.json";

const initialFilter = {
  color: null,
};

export const useTerminalsStore = create(
  devtools(
    immer((set, get) => ({
      terminalsList: terminals,
      queryItem: "",
      filter: initialFilter,
      getTerminalsList: () => get().terminalsList,
      setQueryItem: (item) =>
        set({
          queryItem: item,
        }),
      resetFilter: () => set({ filter: initialFilter }),
      setColor: (index) =>
        set((state) => {
          state.filter.color = index;
        }),
    })),
    { name: "terminalsStore" }
  )
);
