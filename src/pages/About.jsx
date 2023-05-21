import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './styles/About.css'
import { FaBookReader } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import ProgressSummary from "../components/ProgressSummary";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="container__about">
      <section data-aos="fade-right">
        <h1 data-aos="fade-up" >Hi, I'm Max Cereceda</h1>
        <div className="aboutme__info" data-aos="fade-up">
          <p>
            I'm a passionate web developer, with a strong organizational capacity. My main goal is to exceed expectations and achieve exceptional results. I constantly improve my skills and stay updated on the latest advancements in web development to ensure I am at the forefront of the industry.
          </p>
          <p>
            In addition to my dedication to web development, I have a passion for enjoying sunsets and finding inspiration in walks in the rain. Science fiction movies captivate me, electronic music gives me a stimulating energy. I am also an avid traveler, which has allowed me to gain a global perspective and enrich my view of the world.
          </p>
          <p>
            My proven track record of achievement, combined with my perfectionist approach, problem-solving skills, my constant dedication to keeping up with the latest industry trends, make me an enthusiastic and highly valuable candidate for your team.
          </p>
          <p>
            I am excited about the opportunity to contribute to the success of your company. I look forward to the possibility of collaborating and taking our ideas to new heights.
          </p>
        </div>
        <div data-aos="fade-up" className="about__phrase">
          <h2>A phrase I often use is:</h2>
          <p>
            "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them".
          </p>
          <b>Steve Jobs</b>
        </div>
      </section>
      <section className="experiencie__counters" data-aos="fade-right" >
        <div className="card__counter" >
          <ProgressSummary value={500} />
          <p>Hours of theory</p>
        </div>
        <div className="card__counter">
          <ProgressSummary value={1440} />
          <p>Hours of practice</p>
        </div>

        <div className="card__counter">
          <ProgressSummary value={10} />
          <p>Satisfied companies</p>
        </div>

        <div className="card__counter">
          <ProgressSummary value={1} />
          <p>Year of Accumulated Experience</p>
        </div>

        <div className="card__counter">
          <ProgressSummary value={10} />
          <p>Completed projects</p>
        </div>

      </section>

      <section data-aos="fade-left">
        <h1>
          <FaBookReader /> EDUCATION
        </h1>
        <div className="experiencie__dates">
          <h3>
            <Link to='https://www.academlo.com/' target="_blank">
              ACADEMLO
            </Link>
          </h3>
          (November 2022 - May 2023)
        </div>
        <h3>
          Full Stack Web Developer
        </h3>
        <div className="experiencie__dates">
          <h3>
            <Link to='https://www.upn.edu.pe/' target="_blank">
              UNIVERSIDAD PRIVADA DEL NORTE
            </Link>
          </h3>
          ( March 2015-Paused)
        </div>
        <h3>Industrial engineering</h3>

        <h1>
          <MdWorkHistory /> WORK EXPERIENCIE
        </h1>
        <div className="experiencie__dates">
          <Link to='https://www.nocountry.tech/' target="_blank">
            <h3>NOCOUNTRY TECH</h3>
          </Link>
          (03/2023 - Today)
        </div>
        <p>
          Frontend Web Developer
        </p>
      </section>
    </main>

  );
};

export default About;
