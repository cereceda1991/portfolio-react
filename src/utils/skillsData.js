import {
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
} from 'react-icons/fa';
import { TbBrandNextjs, TbBrandRedux, TbBrandVite } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import {
  SiAdobe,
  SiCanva,
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiPostman,
  SiPowerbi,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
} from 'react-icons/si';
import { DiPhp } from 'react-icons/di';
import { FaLaravel } from 'react-icons/fa';

const skillsData = [
  { name: 'HTML', icon: FaHtml5, color: '#F16529', category: 'Frontend' },
  { name: 'CSS', icon: FaCss3Alt, color: '#2965F1', category: 'Frontend' },
  { name: 'React Js', icon: FaReact, color: '#61DBFB', category: 'Frontend' },
  { name: 'Redux', icon: TbBrandRedux, color: '#764ABC', category: 'Frontend' },
  {
    name: 'Next Js',
    icon: TbBrandNextjs,
    color: '#454545',
    category: 'Frontend',
  },
  {
    name: 'Bootstrap',
    icon: FaBootstrap,
    color: '#7952B3',
    category: 'Frontend',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    color: '#38B2AC',
    category: 'Frontend',
  },
  {
    name: 'Vite Js',
    icon: TbBrandVite,
    color: 'rgb(139,109,244,1)',
    category: 'Frontend',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
    category: 'Backend',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#454545',
    category: 'Backend',
  },
  { name: 'Node Js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'NPM', icon: FaNpm, color: '#CB3837', category: 'Backend' },
  { name: 'Adobe', icon: SiAdobe, color: '#FF0000', category: 'Design' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E', category: 'Design' },
  { name: 'Canva', icon: SiCanva, color: '#4ababc', category: 'Design' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'DevOps' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D', category: 'Backend' },
  { name: 'Git', icon: BsGit, color: '#F05032', category: 'Version Control' },
  {
    name: 'Power BI',
    icon: SiPowerbi,
    color: '#F2C811',
    category: 'Data Visualization',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    category: 'Programming Languages',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    category: 'Programming Languages',
  },
  {
    name: 'PHP',
    icon: DiPhp,
    color: '#777BB4',
    category: 'Programming Languages',
  },
  { name: 'Laravel', icon: FaLaravel, color: '#FF2D20', category: 'Backend' },
];

export default skillsData;
