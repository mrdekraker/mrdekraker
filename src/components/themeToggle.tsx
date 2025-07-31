// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/context/themeContext";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} className="p-2 border rounded">
      {/* {theme === "light" ? `LightMode` : `DarkMode`} */}
      {theme === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
