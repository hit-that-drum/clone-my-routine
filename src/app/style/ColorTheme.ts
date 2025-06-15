export const ColorTheme = {
  // Base colors
  white: "#ffffff",
  black: "#000000",
  blue: "#0070f3",
  lightblue: "#6495ED",

  // Primary colors
  primary: {
    main: "#475B4A",
    light: "#CCCCCC",
  },

  // Background colors
  background: {
    default: "#ffffff", // White
    paper: "#f5f5f5", // Light gray
    homeGrey: "#fafafa", // Very light gray
  },

  // Text colors
  text: {
    primary: "#475B4A",
    secondary: "#CCCCCC",
    light: "#919C92",
    homeDark: "#222222",
    homeGray: "#454545",
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
