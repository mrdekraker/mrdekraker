// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useTheme } from "@mui/material";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const theme = useTheme();
  // const

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-800">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
