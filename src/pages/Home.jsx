import { Link } from 'react-router-dom';

// Importaciones de componentes y estilos
import Typewriter from 'typewriter-effect';
import ButtonModern from '../components/ButtonModern';
import SideBar from '../components/SideBar';
import './styles/Home.css';

//Importacion de Imagenes
import Foto from '/foto-home.webp';

// Importaciones relacionadas con la API
import { DataApi } from '../api/DataApi';

const Home = () => {
  
  const handleUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  // Accede a la información del idioma en tu componente
  const { welcome, title, typewriterStrings, slogan, description, buttonText } =
    languageData.home;

  return (
    <main className="container__home">
      <section className="home__info">
        <h1>{welcome}</h1>
        <h1>
          <span className="word">
            {title.word1.map((letter, index) => (
              <span key={index} className={letter.className}>
                {letter.letter}
              </span>
            ))}
          </span>
          <span className="word">
            {title.word2.map((letter, index) => (
              <span key={index} className={letter.className}>
                {letter.letter}
              </span>
            ))}
          </span>
          <span className="word">
            {title.word3.map((letter, index) => (
              <span key={index} className={letter.className}>
                {letter.letter}
              </span>
            ))}
          </span>
        </h1>

        <h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 90,
              backSpeed: 90,
              strings: typewriterStrings,
            }}
          />
        </h2>
        <h3>{slogan}</h3>
        <p>{description}</p>
        <h4>
          <Link to="/about" onClick={handleUpClick}>
            <ButtonModern content={buttonText} />
          </Link>
        </h4>
      </section>

      <section className="home__img">
        <img src={Foto} alt="foto" />
      </section>
      <SideBar />
    </main>
  );
};

export default Home;
