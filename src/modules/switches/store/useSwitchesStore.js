import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import data from "../data/switches.json";
import { FILTERS } from "../utils/constants";

const useSwitchesStore = create(
  devtools(
    immer((set, get) => ({
      queryItem: "",
      itemsList: data,
      filters: FILTERS.reduce((acc, property) => {
        acc[property] = "all";
        return acc;
      }, {}),
      getItemsList: () => get().itemsList,
      setQueryItem: (item) =>
        set({
          queryItem: item,
        }),
      setFilter: (filter, value) =>
        set((state) => {
          if (state.filters[filter] === value) return;
          state.filters[filter] = value;
        }),
    })),
    { name: "switchesStore" }
  )
);

export default useSwitchesStore;
