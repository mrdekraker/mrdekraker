// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createClient } from "@sanity/client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/context/themeContext";

// Sanity.io client (optional)
const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset",
  useCdn: true,
  apiVersion: "2025-07-31",
});

// Emotion cache for SSR
const cache = createCache({ key: "css", prepend: true });

export const metadata = {
  title: "Mark DeKraker",
  description: "My personal site built with Next.js and Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Fetch nav links from Sanity.io (optional)
  const navLinks = (await client.fetch(
    `*[_type == "navLink"]{ label, path, icon }`
  )) || [
    { label: "Home", path: "/", icon: "Home" },
    { label: "Blog", path: "/blog", icon: "LaptopChromebook" },
    { label: "Portfolio", path: "/portfolio", icon: "PermMedia" },
    { label: "Contact", path: "/contact", icon: "AccountBox" },
  ];

  return (
    <html lang="en">
      <body>
        <CacheProvider value={cache}>
          <ThemeProvider>
            <CssBaseline />
            <Navbar navLinks={navLinks} />
            <main className="min-h-screen p-4">{children}</main>
            <Footer />
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
