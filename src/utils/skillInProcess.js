import { FaVuejs, FaAngular, FaAws, FaPython } from 'react-icons/fa';
import {
  SiSvelte,
  SiFirebase,
  SiNestjs,
  SiSwagger,
  SiMongodb,
} from 'react-icons/si';
import { DiDjango, DiRuby } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';

const inProcess = [
  { name: 'Vue.js', icon: FaVuejs, color: '#41B883', category: 'Frontend' },
  { name: 'Svelte', icon: SiSvelte, color: '#FF3E00', category: 'Frontend' },
  { name: 'Angular', icon: FaAngular, color: '#DD0031', category: 'Frontend' },
  { name: 'Swagger', icon: SiSwagger, color: '#85EA2D', category: 'Backend' },
  { name: 'Nest.js', icon: SiNestjs, color: '#E0234E', category: 'Backend' },
  { name: 'Django', icon: DiDjango, color: '#092E20', category: 'Backend' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFA000', category: 'Backend' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Backend' },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    color: '#61DBFB',
    category: 'Mobile',
  },
  {
    name: 'Python',
    icon: FaPython,
    color: '#3776AB',
    category: 'Programming Languages',
  },
  {
    name: 'Ruby on Rails',
    icon: DiRuby,
    color: '#CC0000',
    category: 'Programming Languages',
  },
];

export default inProcess;
