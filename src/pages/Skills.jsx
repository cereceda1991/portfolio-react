import React, { useEffect, useState } from "react";
import AOS from "aos";
import { FaAngular, FaBootstrap, FaCss3Alt, FaDocker, FaFigma, FaHtml5, FaLaravel, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandRedux, TbBrandVite } from "react-icons/tb";
import { SiExpress, SiJavascript, SiPostgresql, SiSvelte, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiDjango, DiPhp, DiRuby } from "react-icons/di";

import "aos/dist/aos.css";
import './styles/Skills.css'
import SideBar from "../components/SideBar";
import { BsGit } from "react-icons/bs";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 />, color: "#F16529" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#2965F1" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React Js", icon: <FaReact />, color: "#61DBFB" },
  { name: "Vite Js", icon: <TbBrandVite />, color: "rgb(139,109,244,1)" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Redux", icon: <TbBrandRedux />, color: "#764ABC" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Next Js", icon: <TbBrandNextjs />, color: "#000000" },
  { name: "Node Js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Git", icon: <BsGit />, color: "#F05032" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" }
];

const inProcess = [
  { name: "Vue.js", icon: <FaVuejs />, color: "#41B883" },
  { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
  { name: "Svelte", icon: <SiSvelte />, color: "#FF3E00" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Ruby on Rails", icon: <DiRuby />, color: "#CC0000" },
  { name: "Django", icon: <DiDjango />, color: "#092E20" },
  { name: "PHP", icon: <DiPhp />,color: "#777BB4" },
  { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconHoverEnd = () => {
    setHoveredIcon(null);
  };

  return (
    <main className="container__skills">
      <h1>Skill's</h1>
      <section data-aos="fade-up" className="skill__info">
        {skillsData.map((skill) => (
          <div
            className={`card__skill ${hoveredIcon === skill.name ? "hovered" : ""}`}
            key={skill.name}
            onMouseEnter={() => handleIconHover(skill.name)}
            onMouseLeave={handleIconHoverEnd}
          >
            <p>{skill.name}</p>
            <div>
              {React.cloneElement(skill.icon, {
                size: 60,
                color: hoveredIcon === skill.name ?  skill.color: "#676767"
              })}
            </div>
          </div>
        ))}
      </section>
<h1> In progress</h1>
      <section data-aos="fade-up" className="skill__info">
        {inProcess.map((skill) => (
          <div
            className={`card__skill ${hoveredIcon === skill.name ? "hovered" : ""}`}
            key={skill.name}
            onMouseEnter={() => handleIconHover(skill.name)}
            onMouseLeave={handleIconHoverEnd}
          >
            <p>{skill.name}</p>
            <div>
              {React.cloneElement(skill.icon, {
                size: 60,
                color: hoveredIcon === skill.name ? "#676767" : skill.color
              })}
            </div>
          </div>
        ))}
      </section>
      <SideBar />
    </main>
  );
};

export default Skills;