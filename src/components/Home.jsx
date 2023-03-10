import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import Foto from "../assets/foto-home.png";
import './styles/Home.css'
import playSound from "../utils/playSound";

const Home = () => {

  return (
    <div name="home" className="container__home" >
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
