import { FaBootstrap, FaCss3Alt, FaDocker, FaFigma, FaHtml5, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandRedux, TbBrandVite } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { SiAdobe, SiCanva, SiExpress, SiJavascript, SiPostgresql, SiPostman, SiPowerbi, SiTailwindcss, SiTypescript } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: FaHtml5, color: "#F16529", category: "Frontend" },
  { name: "CSS", icon: FaCss3Alt, color: "#2965F1", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Programming languages" },
  { name: "React Js", icon: FaReact, color: "#61DBFB", category: "Frontend" },
  { name: "Vite Js", icon: TbBrandVite, color: "rgb(139,109,244,1)", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC", category: "Frontend" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", category: "Frontend" },
  { name: "Redux", icon: TbBrandRedux, color: "#764ABC", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Programming languages" },
  { name: "Next Js", icon: TbBrandNextjs, color: "#454545", category: "Frontend" },
  { name: "Node Js", icon: FaNodeJs, color: "#339933", category: "Backend" },
  { name: "Git", icon: BsGit, color: "#F05032", category: "Control de versiones" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Backend" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E", category: "Design" },
  { name: "Express.js", icon: SiExpress, color: "#454545", category: "Backend" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "DevOps" },
  { name: "Power BI", icon: SiPowerbi, color: "#F2C811", category: "Data Visualization" },
  { name: "NPM", icon: FaNpm, color: "#CB3837", category: "Backend" },
  { name: "Adobe", icon: SiAdobe, color: "#FF0000", category: "Design" },
  { name: "Canva", icon: SiCanva, color: "#4ababc", category: "Design" },
];

export default skillsData;
