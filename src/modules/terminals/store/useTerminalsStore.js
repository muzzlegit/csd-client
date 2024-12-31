import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import terminals from "../data/Terminals.json";

export const useTerminalsStore = create(
  devtools(
    immer((set, get) => ({
      terminalsList: terminals,
      colorIndex: null,
      getColorIndex: () => get().colorIndex,
      setColorIndex: (index) => set({ colorIndex: index }),
    })),
    { name: "terminalsStore" }
  )
);
