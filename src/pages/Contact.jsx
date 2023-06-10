import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/Contact.css';
import SideBar from '../components/SideBar';
import { setLanguageData } from '../store/languageSlice';
import axios from 'axios';
import ButtonModern from '../components/ButtonModern';

const Contact = () => {
  const languageData = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cargar datos del idioma solo si aún no se han cargado
    if (!languageData) {
      // Simulación de carga de datos del JSON

      const url = '/src/languages/data_es.json';
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
  const { title, form } = languageData.contact;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.submit();
    form.reset();
  };


  return (
    <main className="container__contact">
      <section>
        <h1>{title}</h1>
      </section>
      <section className="container__form">
        <span className="login__circuit-mask"></span>
        <form
          className="contact__form"
          action="https://getform.io/f/6eafabcb-9fe4-43cf-82bb-03d9a9ec823e"
          method="POST"
          onSubmit={handleFormSubmit}
          data-aos="zoom-out"
        >
          <label>{form.fullNameLabel}</label>
          <input type="text" name="name" placeholder={form.fullNamePlaceholder} required />

          <label>{form.emailLabel}</label>
          <input type="email" name="email" placeholder={form.emailPlaceholder} required />

          <label>{form.messageLabel}</label>
          <textarea type="text" name="message" placeholder={form.messagePlaceholder} required />

          <ButtonModern type="submit" content={form.submitButton} />
        </form>
      </section>
      <SideBar />
    </main>
  );
};

export default Contact;
