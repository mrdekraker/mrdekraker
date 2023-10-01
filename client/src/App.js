import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./scenes/About";
import Blog from "./scenes/Blog";
import BlogPost from "./scenes/BlogPost";
import Contact from "./scenes/Contact";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import NavBar from "./scenes/NavBar";

import { useMemo } from "react";
import {  useSelector } from "react-redux";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const shadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            boxShadow={mode === "light" ? shadow : "none"}
            overflow="hidden"
          >
              <NavBar />
            </Box>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogpost/:slug" element={<BlogPost />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
