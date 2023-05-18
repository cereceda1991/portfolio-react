import Typewriter from "typewriter-effect";
import Foto from "../assets/foto-home.png";
import './styles/Home.css'
import playSound from "../utils/playSound";
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <main className="container__home">
      <section className="home__info" >
        <h2>Hi, I am Peruvian </h2>
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 90,
              backSpeed: 90,
              strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Max Cereceda"]
            }}
          />
        </h1>
        <h3>Solutions Empowering Modern Businesses</h3>
        <h4>
          In today's fast-paced digital landscape, businesses need web apps that can adapt to their changing needs. As a full-stack developer, I create specialized, scalable, reliable, and user-friendly solutions. View my portfolio to find out how I can help your business succeed.
        </h4>
        <Link to="/about" smooth={true} duration={500}>
          <button onMouseEnter={playSound} onMouseLeave={() => { }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About Me
          </button >
        </Link>
      </section>
      <section className="home__img">
        <img src={Foto} alt="foto" />
      </section>
    </main>
  );
};

export default Home;
