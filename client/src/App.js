import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./scenes/About";
import Blog from "./scenes/Blog";
import BlogPost from "./scenes/BlogPost";
import Contact from "./scenes/Contact";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import NavBar from "./scenes/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogpost/:slug" element={<BlogPost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
