import getColorToken from "./getColorToken";

export type ThemeToken = {
  primary: Record<string, string>;
  secondary: Record<string, string>;
  text: Record<string, string>;
  textIdle: Record<string, string>;
  acent: Record<string, string>;
  red: Record<string, string>;
  green: Record<string, string>;
  warn: Record<string, string>;
  white: Record<string, string>;
  black: Record<string, string>;
};

export type ThemeNameType = "dark" | "light";

export type ThemeType = {
  colors: ThemeToken;
};

export type ThemeOptType = {
  dark: {
    colors: ThemeToken;
  };
  light: {
    colors: ThemeToken;
  };
};

export const theme: ThemeOptType = {
  dark: {
    colors: {
      primary: getColorToken("#1a1c21"),
      secondary: getColorToken("#212328"),
      text: getColorToken("#FFF9F0"),
      textIdle: getColorToken("#909090"),
      acent: getColorToken("#00a8ff"),
      red: getColorToken("#ed1f24"),
      green: getColorToken("#6FCF97"),
      warn: getColorToken("#F7AD0E"),
      white: getColorToken("#FFFFFF"),
      black: getColorToken("#000000"),
    },
  },
  light: {
    colors: {
      primary: getColorToken("#D4D2D2"),
      secondary: getColorToken("#F0EEEE"),
      text: getColorToken("#666"),
      textIdle: getColorToken("#999"),
      acent: getColorToken("#4DBA9E"),
      red: getColorToken("#ed1f24"),
      green: getColorToken("#6FCF97"),
      warn: getColorToken("#F7AD0E"),
      white: getColorToken("#FFFFFF"),
      black: getColorToken("#000000"),
    },
  },
};

export type AppTheme = typeof theme;
