
import './styles/Header.css'

import Navbar from "./Navbar";
import Logo from './Logo';

const Header = () => {

  return (
    <header className="container__header">
      <Logo />
      <Navbar />
    </header >
  );
};
export default Header


