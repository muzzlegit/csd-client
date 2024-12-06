import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getInitialSwitchesList } from "../utils/helpers";

const initialList = getInitialSwitchesList();

const useSwitchesStore = create(
  devtools(
    immer((set, get) => ({
      queryItem: "",
      itemsList: initialList,
      getItemsList: () => get().itemsList,
      setQueryItem: (item) =>
        set({
          queryItem: item,
        }),
    })),
    { name: "switchesStore" }
  )
);

export default useSwitchesStore;
