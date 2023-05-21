import React from "react";
import './styles/Footer.css'
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__socialmedia_section" >
        <span className="footer__divider_line" />
        <ul className="footer__socialmedia_icons">
          <li><a href="https://www.facebook.com/max.cereceda" target="_blank"><FaFacebookF /></a></li>
          <li><a href="https://www.instagram.com/cereceda91/" target="_blank"><FaInstagram /></a></li>
          <li><a href="https://www.youtube.com/channel/UCdh-vS0WSbgOapGrLT9wgvQ" target="_blank"><FaYoutube /></a></li>
          <li><a href="https://twitter.com/cereceda1991" target="_blank"><FaTwitter /></a></li>
          <li><a href="https://www.linkedin.com/in/maxcereceda/" target="_blank"><FaLinkedin /></a></li>
          <li><a href="https://github.com/cereceda1991" target="_blank"><FaGithub /></a></li>
        </ul>
        <span className="footer__divider_line" />
      </section>
      <section className="footer__count_visit">
        <p>Visitor Number</p>
        <img src="https://counter10.optistats.ovh/private/contadorvisitasgratis.php?c=d2qetxqxgc3glld1cjq1hkbrhcbjs1ws" alt="contador" />
      </section>
      <section className="footer__copyright">
        <h1 className="footer__copyright_title" >
          <Link to="/">
            M<sub>C</sub>
          </Link>
        </h1>
        <p>©Max Cereceda 2023. All Rights Reserved</p>
      </section>
    </footer >
  );
};

export default Footer;
