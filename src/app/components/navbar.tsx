"use client";

import Link from "next/link";
import { IconButton } from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Home,
  LaptopChromebook,
  PermMedia,
  AccountBox,
  Menu,
  Close,
} from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className="text-2xl font-bold">
      <Link href="/">MD</Link>
      <Link href="/" className="flex items-center">
        <Home />
      </Link>
      <Link href="/blog" className="flex items-center">
        <LaptopChromebook />
      </Link>
      <Link href="/projects" className="flex items-center">
        <PermMedia />
      </Link>
      <Link href="/about" className="flex items-center">
        <AccountBox />
      </Link>
    </div>
  );
}
