// // import React, { useEffect } from 'react';
// // import Carousel from 'react-bootstrap/Carousel';
// // import './styles/Projects.css';
// // import { useDispatch, useSelector } from 'react-redux';
// // import axios from 'axios';
// // import { setLanguageData } from '../store/languageSlice';
// // import ButtonModern from '../components/ButtonModern';

// // const Projects = () => {
// //   const languageData = useSelector((state) => state.language);
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     // Cargar datos del idioma solo si aún no se han cargado
// //     if (!languageData) {
// //       // Simulación de carga de datos del JSON

// //       const url = '../languages/data_en.json';
// //       axios
// //         .get(url)
// //         .then((response) => {
// //           const languageData = response.data;
// //           dispatch(setLanguageData(languageData));
// //         })
// //         .catch((error) => {
// //           console.log(error);
// //         });
// //     }
// //   }, [languageData, dispatch]);

// //   if (!languageData) {
// //     return <div>Cargando datos...</div>;
// //   }

// //   // Accede a la información del idioma en tu componente
// //   const { title, project } = languageData.projects;

// //   console.log(project);
// //   return (
// //     <div className="container__projects">
// //       <div>
// //         <h2>{title}</h2>
// //       </div>
// //       <Carousel className="container__carousel" interval={3000}>
// //         {project.map((project) => (
// //           <Carousel.Item key={project.id}>
// //             <div className="project_wrapper">
// //               <img
// //                 className="project_image"
// //                 src={project.image}
// //                 alt={project.title}
// //               />
// //               <div className="project_content">
// //                 <h1>{project.title}</h1>
// //                 <p>{project.content}</p>
// //                 <p>{project.technologies}</p>
// //               </div>
// //               <div className="buttons_project">
// //                 <a
// //                   href={project.demoUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <ButtonModern content="Demo" />
// //                 </a>
// //                 <a
// //                   href={project.codeUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <ButtonModern content="Code" />
// //                 </a>
// //               </div>
// //             </div>
// //           </Carousel.Item>
// //         ))}
// //       </Carousel>
// //     </div>
// //   );
// // };

// // export default Projects;
// import React, { useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import './styles/Projects.css';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { setLanguageData } from '../store/languageSlice';
// import ButtonModern from '../components/ButtonModern';
// import TechnologyImages from '../components/TechnologyImages';

// const Projects = () => {
//   const languageData = useSelector((state) => state.language);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Cargar datos del idioma solo si aún no se han cargado
//     if (!languageData) {
//       // Simulación de carga de datos del JSON

//       const url = '../languages/data_en.json';
//       axios
//         .get(url)
//         .then((response) => {
//           const languageData = response.data;
//           dispatch(setLanguageData(languageData));
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [languageData, dispatch]);

//   if (!languageData) {
//     return <div>Cargando datos...</div>;
//   }

//   // Accede a la información del idioma en tu componente
//   const { title, projects } = languageData.project;

//   console.log(projects);

//   return (
//     <div className="container__projects">
//       <div>
//         <h2>{title}</h2>
//       </div>
//       <Carousel className="container__carousel" interval={3000}>
//         {projects.map((project) => (
//           <Carousel.Item key={project.id}>
//             <div className="project_wrapper">
//               <img
//                 className="project_image"
//                 src={project.image}
//                 alt={project.title}
//               />
//               <div className="project_content">
//                 <h1>{project.title}</h1>
//                 <p>{project.content}</p>
//                 <TechnologyImages technologies={project.technologies} />
//               </div>
//               <div className="buttons_project">
//                 <a
//                   href={project.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <ButtonModern content="Demo" />
//                 </a>
//                 <a
//                   href={project.codeUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <ButtonModern content="Code" />
//                 </a>
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Projects;
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Projects.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setLanguageData } from '../store/languageSlice';
import ButtonModern from '../components/ButtonModern';
import TechnologyImages from '../components/TechnologyImages';

const Projects = () => {
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
    </div>
  );
};

export default Projects;
