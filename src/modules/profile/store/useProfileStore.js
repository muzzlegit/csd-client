import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useProfileStore = create(
  devtools(
    immer((set, get) => ({
      user: null,
      isAuth: false,
      //-----------
      getTerminalsList: () => get().terminalsList,
      setAuth: (status) =>
        set({
          isAuth: status,
        }),
      setColor: (index) =>
        set((state) => {
          state.filter.color = index;
        }),
    })),
    { name: "ProfileStore" }
  )
);
