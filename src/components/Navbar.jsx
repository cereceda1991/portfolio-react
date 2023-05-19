import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CV from "../assets/CVMaxCereceda.pdf";
import './styles/Navbar.css'
import playSound from "../utils/playSound";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="container__navbar">
      <h1 className="navbar__title" >
        <Link to="/">
          M<sub>C</sub>
        </Link>
      </h1>
      <nav className='menu__navbar '>
        <ul >
          <li onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link
              to="/"
              className={activeLink === "home" ? "active" : ""}
              onClick={() => {
                setActiveLink("home")
              }}
            >
              Home
            </Link>
          </li>
          <li onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link
              to="/about"
              className={activeLink === "about" ? "active" : ""}
              onClick={() => {
                setActiveLink("about")
              }}
            >
              About Me
            </Link>
          </li>
          <li onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link
              to="/skills"
              className={activeLink === "skills" ? "active" : ""}
              onClick={() => {
                setActiveLink("skills")
              }}
            >
              Skill's
            </Link>
          </li>
          <li onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link
              to="/projects"
              className={activeLink === "projects" ? "active" : ""}
              onClick={() => {
                setActiveLink("projects")
              }}
            >
              Projects
            </Link>
          </li>
          <li onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link
              to="/contact"

              className={activeLink === "contact" ? "active" : ""}
              onClick={() => {
                setActiveLink("contact")
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container__social-icons">
        <ul>
          <li className="li__linkedin" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href="https://www.linkedin.com/in/maxcereceda/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="li__github" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href="https://github.com/cereceda1991">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="li__email" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href="mailto:cereceda1991@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="li__cv" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <a target="__blank" href={CV}>
              My CV  <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div >
  );
};
export default Navbar


