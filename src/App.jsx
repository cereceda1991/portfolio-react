import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './App.css';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import HandleLigthMode from './components/HandleLigthMode';
import LanguageSelector from './components/LanguageSelector';
import ErrorBoundary from './components/Error/ErrorBoundary';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

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
      </ErrorBoundary>
    </>
  );
}

export default App;
