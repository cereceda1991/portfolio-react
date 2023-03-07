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
    <div name="about" className="container__about"  >
      <div>
        <h1 data-aos="fade-up" >Hi! I'm Max Cereceda</h1>
      </div>
      <div data-aos="fade-up" >
        <blockquote>"Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them".</blockquote>
        <cite>Steve Jobs</cite>
      </div>
    </div>

  );
};

export default About;
