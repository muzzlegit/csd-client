import { ProductDTO } from "lib/api/createProductDTO";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { TABS } from "../data/constants";

type Tab = keyof typeof TABS;

interface SearchItemState {
  item: ProductDTO | null;
  itemAccessory: ProductDTO | null;
  setItem: (item: ProductDTO) => void;
  setItemAccessory: (accessory: ProductDTO) => void;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useSearchItemStore = create<SearchItemState>()(
  devtools(
    immer((set) => ({
      item: null,
      itemAccessory: null,
      setItem: (item) => set({ item, itemAccessory: null }),
      setItemAccessory: (accessory) => set({ itemAccessory: accessory }),
      activeTab: "features",
      setActiveTab: (tab) => set({ activeTab: tab }),
    })),
    {
      name: "searchItemProductChoice",
    }
  )
);
