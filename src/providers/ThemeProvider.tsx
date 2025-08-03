"use client";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import getTheme, { ThemeMode } from "@/theme";

export default function ThemeProvider({
  children,
  mode = "light",
}: {
  children: React.ReactNode;
  mode?: ThemeMode;
}) {
  const theme = getTheme(mode);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
