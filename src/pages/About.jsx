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
    <div className="container__about">
      <div>
        <h1>About Me</h1>
        <h2 data-aos="fade-up" >I'm Max Cereceda</h2>
        <p data-aos="fade-up">I am a passionate and highly organized young web developer with a proven track record of working effectively in a team-oriented environment. With a clear focus on achieving goals, I bring a strong commitment to my professional growth and a willingness to adapt to new challenges. I am thrilled at the prospect of joining a dynamic team and contributing my skills to create innovative web solutions.</p>
      </div>
      <div className="container__phrase" data-aos="fade-up" >
        <h2>A phrase I use a lot is:</h2>
        <div className="about__phrase">
          <p>"Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them".</p>
          <b>Steve Jobs</b>
        </div>
      </div>
    </div>

  );
};

export default About;
