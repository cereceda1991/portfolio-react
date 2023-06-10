import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import Whatsapp from "../assets/icon-whatsapp.svg";
import "./styles/ButtonWsp.css";
import "./styles/Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageData } from '../store/languageSlice';
import axios from "axios";
import { useEffect } from "react";


const SocialMediaLink = ({ name, url, icon }) => (
  <li>
    <a href={url} target="_blank" className="footer__socialmedia_link">
      <div>{icon}</div>
    </a>
  </li>
);

const Footer = () => {
  const socialMediaIcons = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/max.cereceda",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cereceda91/",
      icon: <FaInstagram />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCdh-vS0WSbgOapGrLT9wgvQ",
      icon: <FaYoutube />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/cereceda1991",
      icon: <FaTwitter />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/maxcereceda/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/cereceda1991",
      icon: <FaGithub />,
    },
  ];

  const dispatch = useDispatch();
  const languageData = useSelector((state) => state.language);


  useEffect(() => {
    if (!languageData) {
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

  const { visitorNumberText, copyRightText } = languageData.footer;



  return (
    <footer className="footer">
      <section className="footer__socialmedia_section">
        <span className="footer__divider_line" />
        <ul className="footer__socialmedia_icons">
          {socialMediaIcons.map((socialMedia) => (
            <SocialMediaLink
              key={socialMedia.name}
              name={socialMedia.name}
              url={socialMedia.url}
              icon={socialMedia.icon}
            />
          ))}
        </ul>
        <span className="footer__divider_line" />
      </section>
      <section className="footer__count_visit">
        <p>{visitorNumberText}</p>
        <img
          src="https://counter10.optistats.ovh/private/contadorvisitasgratis.php?c=d2qetxqxgc3glld1cjq1hkbrhcbjs1ws"
          alt="contador"
        />
      </section>
      <section className="footer__copyright">
        <h1 className="footer__copyright_title">
          <Link to="/">
            M<sub>C</sub>
          </Link>
        </h1>
        <p>{copyRightText}</p>
      </section>
      <section>
        <a
          href="https://wa.me/51928263103"
          className="btn__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="Contact by WhatsApp" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
