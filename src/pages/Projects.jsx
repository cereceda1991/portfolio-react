import SideBar from '../components/SideBar';

// Importaciones de estilos
import './styles/Projects.css';

// Importaciones relacionadas con la API
import { DataApi } from '../api/DataApi';
import Slider from '../components/Slider';

const Projects = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, projects } = languageData.project;

return (
    <section className="container__projects">
      <h1 className="container__projects-title">{title}</h1>
      <Slider projects={projects} />
      <SideBar />
    </section>
  );
};

export default Projects;
