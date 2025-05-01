import { ReactNode } from "react";
import { ThemeProviderComponent } from "styles/theme";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProviderComponent>{children} </ThemeProviderComponent>;
};
