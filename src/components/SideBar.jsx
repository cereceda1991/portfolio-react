import React, { useEffect } from 'react';
import axios from 'axios';
import './styles/SideBar.css';
import playSound from '../utils/playSound';

// Importación de Iconos
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

// Importacion de Redux y store
import { useSelector, useDispatch } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';

const SideBar = () => {
  const languageData = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!languageData) {
      const url =
        'https://raw.githubusercontent.com/cereceda1991/myportfolio-react/main/src/languages/data_es.json';
      axios
        .get(url)
        .then((response) => {
          const languageData = response.data;
          dispatch(setLanguageData(languageData));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [languageData, dispatch]);

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { socials } = languageData.sidebar;

  return (
    <aside className="container__social-icons">
      <ul>
        {socials.map((social, index) => (
          <li
            key={index}
            className={social.className}
            onMouseEnter={playSound}
            onMouseLeave={() => {}}
          >
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
