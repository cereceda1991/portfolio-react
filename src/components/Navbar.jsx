import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CV from "../assets/CVMaxCereceda.pdf";
import { Link } from "react-scroll";
import './styles/Navbar.css'
import { useState } from "react";
import playSound from "../utils/playSound";

// const Navbar = () => {

//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   const playSound = () => {
//     const audio = new Audio(hoverSound);
//     audio.play();
//   };

//   return (
//     <header className="container__navbar">
//       <h1 className="navbar__title">
//         <Link to="home" smooth={true} duration={1000}>
//           M <sub>C</sub>
//         </Link>
//       </h1>

//       <div onClick={handleClick}>
//         {!nav ? <>
//           <FaTimes />
//           <div className="menu__navbar">
//             <ul>
//               <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
//                 <Link to="home" smooth={true} duration={500}>
//                   Home
//                 </Link>
//               </li>
//               <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
//                 <Link to="about" smooth={true} duration={500}>
//                   About Me
//                 </Link>
//               </li>
//               <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
//                 <Link to="skills" smooth={true} duration={500}>
//                   Skill's
//                 </Link>
//               </li>
//               <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
//                 <Link to="projects" smooth={true} duration={500}>
//                   Projects
//                 </Link>
//               </li>
//               <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
//                 <Link to="contact" smooth={true} duration={500}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </>
//           : <FaBars />}
//       </div>

//     </header >
//   );
// }
// export default Navbar;


// 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => setNavOpen(!navOpen);

  return (
    <header className="container__navbar">
      <h1 className="navbar__title">
        <Link to="home" smooth={true} duration={1000}>
          M <sub>C</sub>
        </Link>
      </h1>

      <div className="menu__toggle" onClick={handleClick}>
        <FaBars />
      </div>

      <div className={`menu__navbar ${navOpen ? "open" : ""}`}>
        <div className="menu__toggle" onClick={handleClick}>
          <FaTimes />
        </div>

        <ul>
          <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link to="skills" smooth={true} duration={500}>
              Skill's
            </Link>
          </li>
          <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="nav__item" onMouseEnter={playSound} onMouseLeave={() => { }}>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
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
    </header>
  );
};
export default Navbar