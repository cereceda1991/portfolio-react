// 1. Importaciones de estilos y componentes
import SideBar from '../components/SideBar';
import './styles/About.css';

// 4. Importación de acciones y slices de Redux
import ExperienceCounters from '../components/ExperienceCounters';
import WorkExperience from '../components/WorkExperience';
import PersonalInfo from '../components/PersonalInfo';
import Education from '../components/Education';

// Backend
import { DataApi } from '../api/DataApi';

const About = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

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
