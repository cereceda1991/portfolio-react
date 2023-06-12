import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';
import './styles/LanguageSelector.css';
import data_en from '../languages/data_en.json';
import data_es from '../languages/data_es.json';
import data_pt from '../languages/data_pt.json';
import { BiWorld } from 'react-icons/bi';
import { IoLanguageSharp } from 'react-icons/io5';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    let data;

    switch (language) {
      case 'en':
        data = data_en;
        break;
      case 'es':
        data = data_es;
        break;
      case 'pt':
        data = data_pt;
        break;
      default:
        data = null;
        break;
    }

    if (data) {
      dispatch(setLanguageData(data));
    }
  };

  return (
    <div className="language__selector">
      <div className="language__dropdown">
        <BiWorld />
        <IoLanguageSharp />
        <select
          className="language__select"
          onChange={(event) => handleLanguageChange(event.target.value)}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
