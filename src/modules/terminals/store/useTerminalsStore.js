import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import terminals from "../data/Terminals.json";

const initialFilter = {
  color: null,
};

export const useTerminalsStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        terminalsList: terminals, // Статичний масив, не змінюється
        favorite: [],
        queryItem: null,
        selectedAccessory: null,
        filter: initialFilter,
        getTerminalsList: () => get().terminalsList,
        toggleFavorite: (article) =>
          set((state) => {
            if (!article) return;

            const index = state.favorite.indexOf(article);
            if (index !== -1) {
              state.favorite.splice(index, 1); // Видаляємо
            } else {
              state.favorite.push(article); // Додаємо
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
      })),
      {
        name: "terminalsStore",
        partialize: (state) => ({ favorite: state.favorite }), // Зберігаємо лише `favorite`
      }
    )
  )
);
