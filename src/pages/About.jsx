import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './styles/About.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main className="container__about">
      <section>
        <h1 data-aos="fade-up" >Hi, I'm Max Cereceda</h1>
        <p data-aos="fade-up">I am an accomplished and enthusiastic web developer with extensive experience and a strong organizational aptitude. My primary objective is to exceed expectations and achieve outstanding results. I continuously enhance my skills and stay abreast of the latest advancements in web development, ensuring I remain at the forefront of the industry. I am excited to join a dynamic team where I can leverage my expertise to develop innovative, high-impact web solutions</p>
      </section>
      <section data-aos="fade-up" className="about__phrase">
        <h2>A phrase I use a lot is:</h2>
        <p>
          "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them".
        </p>
        <b>Steve Jobs</b>
      </section>
    </main>

  );
};

export default About;
