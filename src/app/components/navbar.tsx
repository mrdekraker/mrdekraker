"use client";

import { useState } from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import {
  DarkMode,
  LightMode,
  Home,
  LaptopChromebook,
  PermMedia,
  AccountBox,
  Palette,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useThemeContext } from "@/providers/ThemeProvider";
import AccentModal from "@/app/components/AccentModal";

export default function Navbar() {
  const { mode, toggleMode } = useThemeContext();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const accentColor = theme.palette.secondary.main;

  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-zinc-900">
        <div className="flex items-center gap-4 text-2xl font-bold">
          <Link href="/">MD</Link>
          <Link
            href="/"
            style={{ color: accentColor }}
            className="flex items-center">
            <Home />
          </Link>
          <Link
            href="/blog"
            style={{ color: accentColor }}
            className="flex items-center">
            <LaptopChromebook />
          </Link>
          <Link
            href="/portfolio"
            style={{ color: accentColor }}
            className="flex items-center">
            <PermMedia />
          </Link>
          <Link
            href="/contact"
            style={{ color: accentColor }}
            className="flex items-center">
            <AccountBox />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <IconButton onClick={toggleMode} color="inherit">
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>

          {/* 🎨 Accent Modal Trigger */}
          <IconButton onClick={() => setOpen(true)} color="inherit">
            <Palette />
          </IconButton>
        </div>
      </div>

      <AccentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
