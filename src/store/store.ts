import { ThemeNameType } from "styles/theme/theme";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type GlobalStoreTypes = {
  themeName: ThemeNameType;
  setThemeName: (themeName: ThemeNameType) => void;
};

export const useGlobalStore = create(
  persist(
    immer<GlobalStoreTypes>((set) => ({
      themeName: "light",
      setThemeName: (themeName) =>
        set({
          themeName,
        }),
    })),
    {
      name: "globalStore",
      partialize: (state) => ({ themeName: state.themeName }),
    }
  )
);
