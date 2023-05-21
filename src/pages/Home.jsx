import Typewriter from "typewriter-effect";
import Foto from "../assets/foto-home.svg";
import './styles/Home.css'
import playSound from "../utils/playSound";
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <main className="container__home">
      <section className="home__info" >
        <h1>Hi, I'm Max Cereceda </h1>
        <h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 90,
              backSpeed: 90,
              strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
            }}
          />
        </h2>
        <h3>Solutions Empowering Modern Businesses</h3>
        <p>
          In today's fast-paced digital landscape, businesses need web apps that can adapt to their changing needs. As a full-stack developer, I create specialized, scalable, reliable, and user-friendly solutions. View my portfolio to find out how I can help your business succeed.
        </p>
        <Link to="/about" >
          <button onMouseEnter={playSound} onMouseLeave={() => { }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            READ MORE
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
