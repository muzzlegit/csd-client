import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

import { type ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProviderComponent = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
