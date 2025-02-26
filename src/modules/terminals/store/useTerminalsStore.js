import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import terminals from "../data";

const initialFilter = {
  color: null,
  accessory: "",
};

export const useTerminalsStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        terminalsList: terminals,
        favorite: [],
        queryItem: null,
        selectedAccessory: null,
        filter: initialFilter,
        getFilterAccessory: () => get().filter.accessory,
        getTerminalsList: () => get().terminalsList,
        toggleFavorite: (article) =>
          set((state) => {
            if (!article) return;
            const index = state.favorite.indexOf(article);
            if (index !== -1) {
              state.favorite.splice(index, 1);
            } else {
              state.favorite.push(article);
            }
          }),
        deleteFromFavorite: (article) =>
          set((state) => ({
            favorite: state.favorite.filter((item) => item !== article),
          })),

        setQueryItem: (item) => set((state) => void (state.queryItem = item)),
        setSelectedAccessory: (item) =>
          set((state) => void (state.selectedAccessory = item)),

        resetFilter: () => set((state) => void (state.filter = initialFilter)),
        setColor: (index) => set((state) => void (state.filter.color = index)),
        setFilterItem: (filter, value) =>
          set((state) => void (state.filter[filter] = value)),
      })),
      {
        name: "terminalsStore",
        partialize: (state) => ({ favorite: state.favorite }),
      }
    )
  )
);
