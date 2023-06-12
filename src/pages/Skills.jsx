import React, { useState } from 'react';
import './styles/Skills.css';

// Importaciones de componentes y estilos
import SideBar from '../components/SideBar';
import skillsData from '../utils/skillsData';
import inProcess from '../utils/skillInProcess';

// Importaciones relacionadas con la API
import { DataApi } from '../api/DataApi';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const languageData = DataApi();

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
          className={!selectedCategory ? 'active' : ''}
          onClick={() => handleCategoryFilter(null)}
        >
          All technologies
        </button>
        {Array.from(new Set(skillsData.map((skill) => skill.category))).map(
          (category) => (
            <button
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryFilter(category)}
              key={category}
            >
              {category}
            </button>
          )
        )}
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
      <span className="footer__divider_line" />
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
};

export default Skills;
