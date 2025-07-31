// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThemeProvider from "@/context/themeContext"; // or /providers or /store

export const metadata = {
  title: "Mark DeKraker",
  description: "My personal site built with Next.js and Sanity",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
