import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import Foto from "../assets/foto-home.png";
import './styles/Home.css'
import playSound from "../utils/playSound";
// import Cursor from "./Cursor";
// import { useEffect, useState } from "react";

const Home = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHistory(history.slice(-20));
  //   }, 100);

  //   return () => clearInterval(timer);
  // }, [history]);

  // const handleMouseMove = (event) => {
  //   setPosition({ x: event.clientX, y: event.clientY });
  //   setHistory([...history, { x: event.clientX, y: event.clientY }]);
  // };

  // const handleOut = () => {
  //   setPosition({ x: -10, y: -10 });
  // };

  // onMouseMove={handleMouseMove} onMouseLeave={handleOut}

  return (
    <div className="container__home" name="home">
      {/* <Cursor position={position} history={history} /> */}
      <div className="home__info" >
        <p>Hi, my name is  </p>
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 90,
              backSpeed: 60,
              strings: ["Max Cereceda", "Commitment", "Dedication"],
            }}
          />
        </h1>
        <h2>I'm a Full Stack Dev from Perú</h2>
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
