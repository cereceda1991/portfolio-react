import React, { useState, useEffect } from 'react';
import './styles/Slider.css';

import TechnologyImages from './TechnologyImages';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ projects }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNumber((prevSlideNumber) =>
        prevSlideNumber === projects.length - 1 ? 0 : prevSlideNumber + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [projects]);

  const goToPrevSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 0 ? projects.length - 1 : prevSlideNumber - 1
    );
  };

  const goToNextSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === projects.length - 1 ? 0 : prevSlideNumber + 1
    );
  };

  return (
    <div className="slider">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`slide ${index === slideNumber ? 'active' : ''}`}
        >
          <img
            className="project_img"
            src={project.image}
            alt={project.title}
          />
          <div className="info">
            <h2>{project.title}</h2>
            <TechnologyImages technologies={project.technologies} />
          </div>
        </div>
      ))}
      <div className="navigation">
        <FaChevronLeft className="prev-btn" onClick={goToPrevSlide} />
        <FaChevronRight className="next-btn" onClick={goToNextSlide} />
      </div>
      <div className="navigation-visibility">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`slide-icon ${index === slideNumber ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
