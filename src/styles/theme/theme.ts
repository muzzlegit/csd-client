import getColorToken from "./getColorToken";

export const theme = {
  colors: {
    primary: getColorToken("#1a1c21"),
    secondary: getColorToken("#212328"),
    text: getColorToken("#FFF9F0"),
    textIdle: getColorToken("#909090"),
    // textAcent: getColorToken(""),
    acent: getColorToken("#00a8ff"),
    red: getColorToken("#ed1f24"),
    green: getColorToken("#6FCF97"),
    warn: getColorToken("#F7AD0E"),
    white: getColorToken("#FFFFFF"),
    black: getColorToken("#000000"),
  },
};

export type AppTheme = typeof theme;
