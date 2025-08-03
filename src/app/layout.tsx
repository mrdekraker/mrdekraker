// app/layout.tsx
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProvider from "@/providers/ThemeProvider";

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
          <ThemeProvider mode="light">{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
