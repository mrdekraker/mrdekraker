"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import getTheme, { ThemeMode, AccentColor } from "../theme/theme";

type ThemeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}

const getSystemTheme = (): ThemeMode => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("light"); // default for SSR
  const [accent, setAccent] = useState<AccentColor>("accentR");
  const [userOverridden, setUserOverridden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // On mount, sync with system and listen for changes
  useEffect(() => {
    const systemMode = getSystemTheme();
    setMode(systemMode);
    setIsMounted(true);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!userOverridden) {
        setMode(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [userOverridden]);

  const toggleMode = () => {
    setUserOverridden(true);
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode, accent), [mode, accent]);

  const contextValue = useMemo(
    () => ({ mode, toggleMode, accent, setAccent }),
    [mode, accent]
  );

  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={contextValue}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
