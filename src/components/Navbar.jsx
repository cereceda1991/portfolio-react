import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

// Importaciones de utilidad
import playSound from '../utils/playSound';

// Importaciones de la API
import { DataApi } from '../api/DataApi';

const Navbar = ({ showNavbar }) => {
  const [activeLink, setActiveLink] = useState(null);
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { links } = languageData.navbar;

  return (
    <nav className={`menu__navbar ${showNavbar ? 'open' : ''}`}>
      <ul>
        {links.map((link, index) => (
          <li key={index} onMouseEnter={playSound} onMouseLeave={() => {}}>
            <Link
              to={link.to}
              className={activeLink === index ? 'active' : ''}
              onClick={() => {
                setActiveLink(index);
              }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
