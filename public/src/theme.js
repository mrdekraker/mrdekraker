// Set Up Color Tokens
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F9FAFB",
    50: "#F4F5F7",
    100: "#E5E7EB",
    200: "#D2D6DC",
    300: "#9FA6B2",
    400: "#6B7280",
    500: "#4B5563",
    600: "#374151",
    700: "#252F3F",
    800: "#161E2E",
    900: "#0E1624",
    1000: "#000000",
  },

  // primary: {
  //   50: "#E6FBFF",
  //   100: "#F0FFF4",
  //   200: "#C6F6D5",
  //   300: "#9AE6B4",
  //   400: "#68D391",
  //   500: "#48BB78",
  //   600: "#38A169",
  //   700: "#2F855A",
  //   800: "#276749",
  //   900: "#22543D",
  //   1000: "#1C4532",
  // },

  // create a primary set based off of 9B9E4F
  primary: {
    50: "#e6fbff",
    100: "#F0FFF4",
    200: "#95c887",
    300: "#82af76",
    400: "#709665",
    500: "#5d7d54",
    600: "#4b6444",
    700: "#3f573a",
    800: "#354c31",
    900: "#384b33",
    1000: "#131911",
  },
};

// MUI theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[800],
              main: colorTokens.primary[500],
              light: colorTokens.primary[100],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },

    // set up typography for Libre Baskerville and League Spartan
    typography: {
      fontFamily: ["Libre Baskerville", "serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["League Spartan", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["League Spartan", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["League Spartan", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["League Spartan", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["League Spartan", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["League Spartan", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};