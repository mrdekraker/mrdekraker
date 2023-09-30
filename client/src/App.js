import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./scenes/About";
import Blog from "./scenes/Blog";
import BlogPost from "./scenes/BlogPost";
import Contact from "./scenes/Contact";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import NavBar from "./scenes/NavBar";

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "./state";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

        <NavBar />
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
