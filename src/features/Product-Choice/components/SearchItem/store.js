import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TABS } from "./data/constants";

export const useSearchItemStore = create(
  devtools(
    immer((set) => ({
      item: null,
      setItem: (item) => set({ item }),
      activeTab: TABS[0],
      setActiveTab: (tab) => set({ activeTab: tab }),
    })),
    {
      name: "searchItemProductChoice",
    }
  )
);
