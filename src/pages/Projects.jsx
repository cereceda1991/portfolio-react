// Importaciones de componentes y estilos
import Carousel from 'react-bootstrap/Carousel';
import './styles/Projects.css';
import TechnologyImages from '../components/TechnologyImages';
import ButtonModern from '../components/ButtonModern';
import SideBar from '../components/SideBar';

// Importaciones relacionadas con la API
import { DataApi } from '../api/DataApi';

const Projects = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { title, projects } = languageData.project;

  return (
    <div className="container__projects">
      <div>
        <h2>{title}</h2>
      </div>
      <Carousel className="container__carousel" interval={3000}>
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <div className="project_wrapper">
              <img
                className="project_image"
                src={project.image}
                alt={project.title}
              />
              <div className="project_content">
                <h1>{project.title}</h1>
                <p>{project.content}</p>
                <div className="technology_images">
                  <TechnologyImages technologies={project.technologies} />
                </div>
              </div>
              <div className="buttons_project">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonModern content="Demo" />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonModern content="Code" />
                </a>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <SideBar />
    </div>
  );
};

export default Projects;
