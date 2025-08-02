import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Mark DeKraker",
  description:
    "Personal website of Mark DeKrakerm, made with Next.js, MUI, TailwindCSS, and Sanity.io.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
