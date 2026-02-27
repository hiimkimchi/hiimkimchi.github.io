import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homescreen from "./pages/Homescreen";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Recents from "./pages/Recents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recents" element={<Recents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
