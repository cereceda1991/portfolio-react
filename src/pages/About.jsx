// 1. Importaciones de estilos y componentes
import './styles/About.css';
import SideBar from '../components/SideBar';

// 2. Importaciones de librerías y módulos externos
import axios from 'axios';
import { useEffect } from 'react';

// 4. Importación de acciones y slices de Redux
import { useSelector, useDispatch } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';
import ExperienceCounters from '../components/ExperienceCounters';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import PersonalInfo from '../components/PersonalInfo';

const About = () => {
  const languageData = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cargar datos del idioma solo si aún no se han cargado
    if (!languageData) {
      // Simulación de carga de datos del JSON

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

  // Accede a la información del idioma en tu componente
  const { name, aboutInfo, paragraphs, phrase, education, experience } =
    languageData.about;

  return (
    <main className="container__about">
      <PersonalInfo name={name} aboutInfo={aboutInfo} phrase={phrase} />
      <ExperienceCounters paragraphs={paragraphs} />
      <Education education={education} />
      <WorkExperience experience={experience} />
      <SideBar />
    </main>
  );
};

export default About;
