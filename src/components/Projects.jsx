import React from "react";
import { useEffect } from "react";

//resources
import Cloud from "../assets/cloudpage.png";
import Nator from "../assets/nator.png";
import Tareas from "../assets/tareas.png";
import Peliculas from "../assets/peliculas.png";
import Pokedex from "../assets/pokedex.png";
import Weather from "../assets/apiweather.png";
import Cars from "../assets/autos.png";
import ReactImg from "../assets/react.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";

import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// styles
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles/Projects.css'

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div name="projects" className="container__projects">
      <h1>Projects</h1>
      <div className="" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="Cloud Page" image={Cloud} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={Tailwind} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly w-auto">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://react-cloudpage.netlify.app"
                  target="__blank"
                >
                  Demo
                </a>
              </button>
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/cloud-page"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="Drive" image={Cars} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={CSS} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly w-auto">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a href="https://autosreactjs.netlify.app" target="__blank">
                  Demo
                </a>
              </button>
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/AutosReactJS"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="OpenWeather API" image={Weather} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={CSS} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://appiopenweather.netlify.app"
                  target="__blank"
                >
                  Demo
                </a>
              </button>
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/openweatherapi"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>

          </SwiperSlide>

          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="Pokedex API" image={Pokedex} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={Tailwind} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://pokedex-reactapi.netlify.app"
                  target="__blank"
                >
                  Demo
                </a>
              </button>
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/pokedex"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="Catalogo de peliculas" image={Peliculas} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={CSS} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly ">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://pelisprueba-react.netlify.app"
                  target="__blank"
                >
                  Demo
                </a>
              </button>
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/movies-react"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="Nator Furniture" image={Nator} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={CSS} alt="/" />
              <img className="w-[30px] h-[30px]" src={JavaScript} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly ">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/NATOR"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[white] rounded-xl">
            <Card make="Task Manager" image={Tareas} />
            <div className="flex flex-row justify-center">
              <img
                className="w-[30px] h-[30px]"
                src={ReactImg}
                alt="/"
                size={25}
              />
              <img className="w-[30px] h-[30px]" src={HTML} alt="/" />
              <img className="w-[30px] h-[30px]" src={CSS} alt="/" />
            </div>
            <div className="flex flex-row justify-evenly ">
              <button className="text-[black] p-1 hover:bg-orange-600 hover:rounded-md hover:text-[white]">
                <a
                  href="https://github.com/SantiA21/Task-Manager"
                  target="__blank"
                >
                  Code
                </a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
