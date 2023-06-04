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
            <span class="letter__name">I</span>
            <span class="letter__name">'</span>
            <span class="letter__name">m</span>
          </span>
          <span className="word">
            <span class="letter__name"></span>
            <span class="letter__name">M</span>
            <span class="letter__name">a</span>
            <span class="letter__name">x</span>
            <span class="letter__name"></span>
          </span>
          <span className="word">
            <span class="letter__name">C</span>
            <span class="letter__name">e</span>
            <span class="letter__name">r</span>
            <span class="letter__name">e</span>
            <span class="letter__name">c</span>
            <span class="letter__name">e</span>
            <span class="letter__name">d</span>
            <span class="letter__name">a</span>
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
