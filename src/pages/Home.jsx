import Typewriter from "typewriter-effect";
import Foto from "../assets/foto-home.png";
import './styles/Home.css'
import playSound from "../utils/playSound";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";


const Home = () => {

  const welcome = '<Welcome/>';

  return (
    <main className="container__home">
      <section className="home__info" >
        <h1>{welcome}</h1>
        <h1>
          <span className="word">
            <span className="letter__name">I</span>
            <span className="letter__name">'</span>
            <span className="letter__name">m</span>
          </span>
          <span className="word">
            <span className="letter__name"></span>
            <span className="letter__name">M</span>
            <span className="letter__name">a</span>
            <span className="letter__name">x</span>
            <span className="letter__name"></span>
          </span>
          <span className="word">
            <span className="letter__name">C</span>
            <span className="letter__name">e</span>
            <span className="letter__name">r</span>
            <span className="letter__name">e</span>
            <span className="letter__name">c</span>
            <span className="letter__name">e</span>
            <span className="letter__name">d</span>
            <span className="letter__name">a</span>
          </span>
        </h1>

        <h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 90,
              backSpeed: 90,
              strings: ["Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"]
            }}
          />
        </h2>
        <h3>Solutions Empowering Modern Businesses</h3>
        <p>
          In today's fast-paced digital landscape, businesses need web apps that can adapt to their changing needs. As a full-stack developer, I create specialized, scalable, reliable, and user-friendly solutions. View my portfolio to find out how I can help your business succeed.
        </p>
        <button onMouseEnter={playSound} onMouseLeave={() => { }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link to="/about">
            READ MORE
          </Link>
        </button >
      </section>
      <section className="home__img">
        <img src={Foto} alt="foto" />
      </section>
      <SideBar />
    </main>
  );
};

export default Home;
