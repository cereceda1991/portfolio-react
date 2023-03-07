import React from "react";
import { useEffect } from "react";

//resources
import Pokedex from "../assets/pokedex.png";
import Weather from "../assets/apiweather.png";
import RickandMorty from "../assets/rickandmorty.png";
import ReactImg from "../assets/react.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Js from '../assets/javascript.png'
import Vite from '../assets/vite.png'
import Redux from '../assets/redux.png'
import Ecommerce from '../assets/eco.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// styles
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles/Projects.css'
import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (

    <div name="projects" className="container__projects">

      <div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div>
        <Swiper
          data-aos="fade-up"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}

        // breakpoints={{
        //   340: {
        //     width: 200,
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     width: 768,
        //     slidesPerView: 3,
        //   },
        //   1040: {
        //     width: 1040,
        //     slidesPerView: 3,
        //   },
        // }}
        >
          <SwiperSlide>
            <Project
              title="Weather App"
              image={Weather}
              languages={[ReactImg, HTML, CSS, Vite]}
              demoUrl="https://max-c-app-weather.netlify.app"
              codeUrl="https://github.com/cereceda1991/weather-app.git"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title="Rick and Morty App"
              image={RickandMorty}
              languages={[ReactImg, HTML, CSS, Vite]}
              demoUrl="https://rick-and-morty-app-maxc.netlify.app/"
              codeUrl="https://github.com/cereceda1991/finallyRickandMorty.git"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title="Pokedex"
              image={Pokedex}
              languages={[ReactImg, HTML, CSS, Js, Vite]}
              demoUrl="https://my-pokedex-max-cereceda.netlify.app/#/"
              codeUrl="https://github.com/cereceda1991/Pokedex_App"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title="Ecommerce"
              image={Ecommerce}
              languages={[ReactImg, HTML, CSS, Js, Redux]}
              demoUrl="https://my-ecommerce-react-maxc.netlify.app/#/"
              codeUrl="https://github.com/cereceda1991/ecommerce-react.git"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div >
  );
};

export default Projects;
