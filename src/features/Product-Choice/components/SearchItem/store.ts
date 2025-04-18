import { ProductDTO } from "lib/api/createProductDTO";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TABS } from "./data/constants";

type Tab = (typeof TABS)[number];

interface SearchItemState {
  item: ProductDTO | null;
  setItem: (item: ProductDTO) => void;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useSearchItemStore = create<SearchItemState>()(
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
