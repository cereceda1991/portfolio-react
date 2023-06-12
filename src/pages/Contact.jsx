// 1. Importaciones de React
import React, { useEffect } from 'react';

// 2. Importaciones de Axios y iconos de React
import axios from 'axios';
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

// 3. Importación de estilos y componentes
import './styles/Contact.css';
import SideBar from '../components/SideBar';
import ButtonModern from '../components/ButtonModern';

// 4. Importación de acciones y slices de Redux
import { useSelector, useDispatch } from 'react-redux';
import { setLanguageData } from '../store/languageSlice';
import { Link } from 'react-router-dom';

const Contact = () => {
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
  const { title, form, email, address, content } = languageData.contact;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.submit();
    form.reset();
  };

  return (
    <main className="container__contact">
      <section className="info__personal">
        <h1>{title}</h1>
        <p>{content}</p>
        <h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:cereceda1991@gmail.com"
          >
            <HiOutlineMail /> {email}
          </a>
        </h4>
        <h4>
          <BiMap /> {address}
        </h4>
      </section>
      <section className="container__form">
        <span className="login__circuit-mask"></span>
        <form
          className="contact__form"
          action="https://getform.io/f/6eafabcb-9fe4-43cf-82bb-03d9a9ec823e"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <label>{form.fullNameLabel}</label>
          <input
            type="text"
            name="name"
            placeholder={form.fullNamePlaceholder}
            required
          />

          <label>{form.emailLabel}</label>
          <input
            type="email"
            name="email"
            placeholder={form.emailPlaceholder}
            required
          />

          <label>{form.messageLabel}</label>
          <textarea
            type="text"
            name="message"
            placeholder={form.messagePlaceholder}
            required
          />
          <ButtonModern type="submit" content={form.submitButton} />
        </form>
      </section>
      <SideBar />
    </main>
  );
};

export default Contact;
