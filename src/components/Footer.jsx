import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Whatsapp from '../assets/icon-whatsapp.svg';
import { setLanguageData } from '../store/languageSlice';
import axios from 'axios';
import './styles/ButtonWsp.css';
import './styles/Footer.css';
import SliderTestimonials from './SliderTestimonials';
import ChatApp from './ChatApp';


const Footer = () => {
  const dispatch = useDispatch();
  const languageData = useSelector((state) => state.language);

  useEffect(() => {
    if (!languageData) {
      const url =
        'https://github.com/cereceda1991/myportfolio-react/blob/main/src/languages/data_es.json';
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

  const { visitorNumberText, copyRightText, title, testimonials, chat} =
    languageData.footer;

  return (
    <footer className="container__footer">
      <h1 className='container_title'>{title}</h1>
      <SliderTestimonials testimonials={testimonials}/>
      <section className="footer__count_visit">
        <h1>{visitorNumberText}</h1>
        <img
          src="https://counter10.optistats.ovh/private/contadorvisitasgratis.php?c=9f8phypqz42nealq88usqmmkhgzj823h"
          alt="contador"
        />
      </section>
      <section className="footer__copyright">
        <h1 className="footer__logo">
          <Link to="/">
            M<sub>C</sub>
          </Link>
        </h1>
        <p>{copyRightText}</p>
      </section>
      <section>
        <a
          href="https://wa.me/51928263103?text=Hola%20Max,%20vi%20tu%20trabajo%20y%20me%20gustar%C3%ADa%20saber%20mas%20sobre%20ti."
          className="btn__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="Contacto por WhatsApp" />
        </a>
      </section>
      <ChatApp chat={chat} />
    </footer>
  );
};

export default Footer;
