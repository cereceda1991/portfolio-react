import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './App.css'

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleIcon = () => {
    setShowIcon(!showIcon);
  };

  const handleClick = () => {
    toggleNavbar()
    toggleIcon()
  }

  return (
    <div>
      <button className="icon_navbar" onClick={handleClick}>
        {showIcon ? <FaTimes /> : <FaBars />}
      </button>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
