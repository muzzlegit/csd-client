import { ThemeProvider } from "@emotion/react";

import { type ReactNode } from "react";
import { useUserTheme } from "./useTheme";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProviderComponent = ({ children }: ThemeProviderProps) => {
  const { theme } = useUserTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
