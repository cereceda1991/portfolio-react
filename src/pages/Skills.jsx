import React, { useEffect } from "react";
import AOS from "aos";
// RESOURCES
import JavaScript from "../assets/javascript.png";
import Bootstrap from "../assets/bootstrap.png"
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import Redux from '../assets/redux.png'
import HTML from "../assets/html.png";
import Vite from "../assets/vite.png";
import CSS from "../assets/css.png";
import Ts from "../assets/ts.png";
import Next from "../assets/next.png";
import Node from "../assets/node.png"
// CSS
import "aos/dist/aos.css";
import './styles/Skills.css'
import SideBar from "../components/SideBar";

const skillsData = [
  { name: "HTML", icon: HTML },
  { name: "CSS", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "React Js", icon: ReactImg },
  { name: "Vite Js", icon: Vite },
  { name: "Tailwind", icon: Tailwind },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Redux", icon: Redux },
  { name: "TypeScript", icon: Ts },
  { name: "Next Js", icon: Next },
  { name: "Node Js", icon: Node }


];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="container__skills" >
      <h1>Skill's</h1>
      <section className="skill__info" >
        {skillsData.map((skill) => (
          <div className="card__skill" key={skill.name}>
            <p>{skill.name}</p>
            <img data-aos="fade-up" src={skill.icon} alt={`${skill.name} icon`} />
          </div>
        ))}
      </section>
      <SideBar />
    </main >
  );
};

export default Skills;
