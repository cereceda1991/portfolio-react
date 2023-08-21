import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Logo from './components/Logo';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.css';
import LanguageSelector from './components/LanguageSelector';
import HandleLigthMode from './components/HandleLigthMode';
import ErrorBoundary from './components/Error/ErrorBoundary';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
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
    <>
      <ErrorBoundary>
        <main className="container_padre">
          <section className="container__header">
            <Logo />
            <HandleLigthMode />
            <LanguageSelector />
            <Navbar showNavbar={showNavbar} />
          </section>
          <button className="icon__navbar" onClick={handleClick}>
            {showIcon ? <FaBars /> : <FaTimes />}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </main>
      </ErrorBoundary>      </>
  );
}

export default App;
