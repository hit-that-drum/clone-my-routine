export const ColorTheme = {
  // Base colors
  white: "#ffffff",
  black: "#000000",

  // Primary colors
  primary: {
    main: "#475B4A",
    light: "#CCCCCC",
  },

  // Background colors
  background: {
    default: "#ffffff",
    paper: "#f5f5f5",
  },

  // Text colors
  text: {
    primary: "#475B4A",
    secondary: "#CCCCCC",
    light: "#919C92",
  },

  // Border colors
  border: {
    light: "#CCCCCC",
    main: "#475B4A",
  },

  // Shadow colors
  shadow: {
    default: "#1A1A1A",
    light: "#f5f5f5",
  },
} as const;

export type ColorThemeType = typeof ColorTheme;
