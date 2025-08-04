import { createContext, useContext, useState } from "react";

export type ThemeMode = "light" | "dark";

const ThemeContext = createContext<{
  mode: ThemeMode;
  toggleTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }
  return context;
};
