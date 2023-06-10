import React, { useEffect, useState } from "react";
import './styles/Skills.css';

import SideBar from "../components/SideBar";
import skillsData from "../utils/skillsData";
import inProcess from "../utils/skillInProcess";

import { useDispatch, useSelector } from "react-redux";
import { setLanguageData } from '../store/languageSlice';
import axios from "axios";

const Skills = () => {
  const languageData = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cargar datos del idioma solo si aún no se han cargado
    if (!languageData) {
      // Simulación de carga de datos del JSON
      const url = '../../languages/data_es.json';
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { completedText, inProgressText } = languageData.skills;



  const filteredSkills = selectedCategory
    ? skillsData.filter((skill) => skill.category === selectedCategory)
    : skillsData;

  const filteredInProcess = selectedCategory
    ? inProcess.filter((skill) => skill.category === selectedCategory)
    : inProcess;

  return (
    <main className="container__skills">
      <div className="category__filter">
        <button
          className={!selectedCategory ? "active" : ""}
          onClick={() => handleCategoryFilter(null)}
        >
          All technologies
        </button>
        {Array.from(new Set(skillsData.map((skill) => skill.category))).map((category) => (
          <button
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryFilter(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
      <section>
        <h1>{completedText}</h1>
        <div className="skills__container">
          {filteredSkills.map((skill) => (
            <div className="card__skill" key={skill.name}>
              <div className="icon__container">
                {React.createElement(skill.icon, {
                  size: 60,
                  color: skill.color,
                })}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>{inProgressText}</h1>
        <div className="skills__container">
          {filteredInProcess.map((skill) => (
            <div className="card__skill" key={skill.name}>
              <div className="icon__container">
                {React.createElement(skill.icon, {
                  size: 60,
                  color: skill.color,
                })}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      <SideBar />
    </main>
  );
}

export default Skills;

