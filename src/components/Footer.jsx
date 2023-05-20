import React from "react";
import './styles/Footer.css'
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container__footer">
      <ul className="social_media_icons">
        <hr className="hr_line" />
        <li><a href="https://www.facebook.com/max.cereceda" target="_blank"><FaFacebookF /></a></li>
        <li><a href="https://www.instagram.com/cereceda91/" target="_blank"><FaInstagram /></a></li>
        <li><a href="https://www.youtube.com/channel/UCdh-vS0WSbgOapGrLT9wgvQ" target="_blank"><FaYoutube /></a></li>
        <li><a href="https://twitter.com/cereceda1991" target="_blank"><FaTwitter /></a></li>
        <li><a href="https://www.linkedin.com/in/maxcereceda/" target="_blank"><FaLinkedin /></a></li>
        <li><a href="https://github.com/cereceda1991" target="_blank"><FaGithub /></a></li>
        <hr className="hr_line" />
      </ul>
      <ul className="container_copyright">
        <li>Visitor Number <img className="visitor_counter" src="https://counter10.optistats.ovh/private/contadorvisitasgratis.php?c=d2qetxqxgc3glld1cjq1hkbrhcbjs1ws" border="0" title="contador de visitas para web" alt="contador" /></li>
        <li>  <h1 className="navbar__title" >
          <Link to="/">
            M<sub>C</sub>
          </Link>
        </h1></li>
        <li className="copyright">© 2023 Max Cereceda.</li>
      </ul>

    </footer>
  );
};

export default Footer;
