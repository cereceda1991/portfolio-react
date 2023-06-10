import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import Foto from '../assets/foto-home.png';
import './styles/Home.css';
import playSound from '../utils/playSound';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import { setLanguageData } from '../store/languageSlice';
import axios from 'axios';

const Home = () => {
  const languageData = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cargar datos del idioma solo si aún no se han cargado
    if (!languageData) {
      // Simulación de carga de datos del JSON

      const url = '../../languages/data_es.json';
      axios.get(url)
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
  const { welcome, title, typewriterStrings, slogan, description, buttonText } = languageData.home;

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
        <button onMouseEnter={playSound} onMouseLeave={() => { }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link to="/about">{buttonText}</Link>
        </button>
      </section>
      <section className="home__img">
        <img src={Foto} alt="foto" />
      </section>
      <SideBar />
    </main>
  );
};

export default Home;
