"use client";

import { useTheme } from "@/context/themeContext";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <IconButton onClick={toggleTheme} className="p-2 border rounded">
      {theme === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
