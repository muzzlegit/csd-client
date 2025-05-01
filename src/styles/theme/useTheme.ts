import { useGlobalStore } from "store/store";
import { ThemeType, theme } from "./theme";

export const useUserTheme = () => {
  const themeName = useGlobalStore((state) => state.themeName);
  const setTheme = useGlobalStore((state) => state.setThemeName);

  const currentTheme: ThemeType = theme[themeName];

  return { theme: currentTheme, setTheme, themeName };
};
