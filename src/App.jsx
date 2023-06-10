import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./components/Logo";
// import LigthMode from "./components/LigthMode";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

import "./App.css";
import LanguageSelector from "./components/LanguageSelector";

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
    toggleNavbar();
    toggleIcon();
  };



  return (
    <main>
      <section className="container__header">
        <Logo />
        <LanguageSelector />
        {/* <LigthMode /> */}
        <Navbar showNavbar={showNavbar} />
      </section>
      <button className="icon__navbar" onClick={handleClick}>
        {showIcon ? <FaTimes /> : <FaBars />}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

