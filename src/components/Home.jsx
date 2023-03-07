import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import Foto from "../assets/fotocarnet.jpg";
import './styles/Home.css'
import hoverSound from '../assets/sound.mp3';


const Home = () => {

  const playSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
  };

  return (
    <div name="home" className="container__home">
      <div className="home__info" >
        <p>Hi, my name is </p>
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 90,
              backSpeed: 60,
              strings: ["Max Cereceda"],
            }}
          />
        </h1>
        <h2>I'm a Front-end Dev based in Perú</h2>
        <Link to="about" smooth={true} duration={500}>
          <button onMouseEnter={playSound} onMouseLeave={() => { }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About Me
          </button >
        </Link>
      </div>
      <div className="home__img">
        <img src={Foto} alt="foto"
        />
      </div>
    </div>
  );
};

export default Home;
