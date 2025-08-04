// app/layout.tsx
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProvider from "@/providers/ThemeProvider";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
