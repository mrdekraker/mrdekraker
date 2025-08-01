import { createTheme, ThemeOptions } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";
// types/theme.ts
export type ColorShade = {
  [key: number]: string;
};

export type ColorTokens = {
  grey: ColorShade;
  primary: ColorShade;
  accentY: ColorShade;
  accentG: ColorShade;
  accentB: ColorShade;
};

// Set Up Color Tokens
// Crimson Red: #990000
// Steel Gray: #4B4E57
// Golden Ochre: #D4A017
// Deep Forest Green: #014421
// Ink Navy: #1B2432

export const colorTokens: ColorTokens = {
  grey: {
    50: "#F0F1F2",
    100: "#DADCE0",
    200: "#B6B9C1",
    300: "#9498A3",
    400: "#737784",
    500: "#4B4E57",
    600: "#3A3C43",
    700: "#2B2D31",
    800: "#1D1E21",
    900: "#101011",
    1000: "#050506",
  },
  primary: {
    50: "#FFE5E5",
    100: "#FFCCCC",
    200: "#FF9999",
    300: "#FF6666",
    400: "#CC3333",
    500: "#990000",
    600: "#730000",
    700: "#520000",
    800: "#390000",
    900: "#210000",
    1000: "#0D0000",
  },
  accentY: {
    50: "#FFF8E5",
    100: "#FFECC2",
    200: "#FFD88C",
    300: "#FDC63F",
    400: "#F0B421",
    500: "#D4A017",
    600: "#A87712",
    700: "#805A0E",
    800: "#5B3F0A",
    900: "#3C2906",
    1000: "#221803",
  },
  accentG: {
    50: "#E6F4EC",
    100: "#C2E3D1",
    200: "#8FCCAA",
    300: "#57B27F",
    400: "#288A53",
    500: "#014421",
    600: "#01381C",
    700: "#012F18",
    800: "#012813",
    900: "#001F0F",
    1000: "#00140A",
  },
  accentB: {
    50: "#EEF1F5",
    100: "#D9DEE6",
    200: "#B1B8C7",
    300: "#8B92A7",
    400: "#62687D",
    500: "#1B2432",
    600: "#161D29",
    700: "#121821",
    800: "#0D1219",
    900: "#090D11",
    1000: "#05080A",
  },
};

export default function getTheme(mode: ThemeMode) {
  const isDark = mode === "dark";

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: colorTokens.primary[500],
      },
      background: {
        default: isDark ? colorTokens.grey[900] : colorTokens.grey[50],
        paper: isDark ? colorTokens.grey[800] : colorTokens.grey[100],
      },
      text: {
        primary: isDark ? colorTokens.grey[100] : colorTokens.grey[900],
        secondary: isDark ? colorTokens.grey[300] : colorTokens.grey[700],
      },
    },
    typography: {
      fontFamily: `"Libre Baskerville", "serif"`,
    },
  };

  return createTheme(themeOptions);
}
