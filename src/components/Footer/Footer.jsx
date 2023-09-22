import { Link } from 'react-router-dom';
import Whatsapp from '../../assets/icon-whatsapp.svg';
import './ButtonWsp.css';
import './Footer.css';

import { DataApi } from '../../api/DataApi';
import SideBar from '../Sidebar/SideBar';

const Footer = () => {

  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  const { visitorNumberText, copyRightText } =
    languageData.footer;

  return (
    <footer className="container__footer">
      <section className="footer__count-visit">
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
      <section className='button__whatsApp'>
        <a
          href="https://wa.me/51928263103?text=Hola%20Max,%20vi%20tu%20trabajo%20y%20me%20gustar%C3%ADa%20saber%20mas%20sobre%20ti."
          className="btn__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="Contacto por WhatsApp" />
        </a>
      </section>
      <SideBar />
    </footer>
  );
};

export default Footer;
