import React, { useEffect } from 'react';
import axios from 'axios';
import './SideBar.css';

// Importación de Iconos
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { DataApi } from '../../api/DataApi';

const SideBar = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { socials } = languageData.sidebar;

  return (
    <aside className="container__social-icons">
      <ul>
        {socials.map((social, index) => (
          <li key={index} className={social.className}>
            <a target="_blank" rel="noopener noreferrer" href={social.url}>
              {social.label}
              {social.icon === 'FaLinkedin' && <FaLinkedin size={30} />}
              {social.icon === 'FaGithub' && <FaGithub size={30} />}
              {social.icon === 'HiOutlineMail' && <HiOutlineMail size={30} />}
              {social.icon === 'BsFillPersonLinesFill' && (
                <BsFillPersonLinesFill size={30} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
