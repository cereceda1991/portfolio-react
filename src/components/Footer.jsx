import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import Whatsapp from '../assets/icon-whatsapp.svg';
import './styles/ButtonWsp.css';
import './styles/Footer.css';

const socialMediaIcons = [
  { name: 'Facebook', url: 'https://www.facebook.com/max.cereceda', icon: <FaFacebookF />, hoverColor: '#3b5998' },
  { name: 'Instagram', url: 'https://www.instagram.com/cereceda91/', icon: <FaInstagram />, hoverColor: '#C13584' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCdh-vS0WSbgOapGrLT9wgvQ', icon: <FaYoutube />, hoverColor: '#FF0000' },
  { name: 'Twitter', url: 'https://twitter.com/cereceda1991', icon: <FaTwitter />, hoverColor: '#1DA1F2' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maxcereceda/', icon: <FaLinkedin />, hoverColor: '#0A66C2' },
  { name: 'GitHub', url: 'https://github.com/cereceda1991', icon: <FaGithub />, hoverColor: '#E55807' },
];

const Footer = () => {
  const handleIconHover = (e, hoverColor) => {
    e.target.style.color = hoverColor;
  };

  const handleIconHoverEnd = (e) => {
    e.target.style.color = '#FFF'; 
  };
  

  const renderSocialMediaIcon = (socialMedia) => (
    <li key={socialMedia.name} 
    onMouseEnter={(e) => handleIconHover(e, socialMedia.hoverColor)}
    onMouseLeave={(e) => handleIconHoverEnd(e, socialMedia.hoverColor)}
>
      <a
        href={socialMedia.url}       
        target="_blank"
        rel="noopener noreferrer"
        className="footer__socialmedia_link"
      >
        {socialMedia.icon}
      </a>
    </li>
  );

  return (
    <footer className="footer">
      <section className="footer__socialmedia_section">
        <span className="footer__divider_line" />
        <ul className="footer__socialmedia_icons">
          {socialMediaIcons.map(renderSocialMediaIcon)}
        </ul>
        <span className="footer__divider_line" />
      </section>
      <section className="footer__count_visit">
        <p>Visitor Number</p>
        <img src="https://counter10.optistats.ovh/private/contadorvisitasgratis.php?c=d2qetxqxgc3glld1cjq1hkbrhcbjs1ws" alt="contador" />
      </section>
      <section className="footer__copyright">
        <h1 className="footer__copyright_title">
          <Link to="/">
            M<sub>C</sub>
          </Link>
        </h1>
        <p>© Max Cereceda 2023. All Rights Reserved</p>
      </section>
      <section>
        <a href="https://wa.me/51928263103" className="btn__whatsapp" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} alt="Contact by WhatsApp" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;

