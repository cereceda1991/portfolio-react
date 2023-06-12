import React, { useEffect } from 'react';
import axios from 'axios';
import playSound from '../utils/playSound';
import './styles/SideBar.css';

import { useSelector, useDispatch } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  const languageData = useSelector((state) => state.language);

  useEffect(() => {
    if (!languageData) {
      const url = '../languages/data_es.json';
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

  console.log(socials);

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
              {React.createElement(social.icon, { size: 30 })}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
