import React, { useState, useRef, useEffect } from 'react';
import './styles/SliderTestimonials.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SliderTestimonials = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const updateTestimonialCount = () => {
      const windowWidth = window.innerWidth;
      let testimonialCount = 3; // Establecer valor predeterminado para pantallas de escritorio

      if (windowWidth <= 768) {
        testimonialCount = 1; // Establecer valor para pantallas móviles
      }

      document.documentElement.style.setProperty('--testimonial-count', testimonialCount);
    };

    // Actualizar el valor inicial al montar el componente
    updateTestimonialCount();

    const resizeHandler = () => {
      updateTestimonialCount();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="slider_testimonials">
      <div className="slider-container" ref={sliderRef}>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentSlide;
            const isPrevious = index === currentSlide - 1 || (currentSlide === 0 && index === testimonials.length - 1);
            const isNext = index === currentSlide + 1 || (currentSlide === testimonials.length - 1 && index === 0);

            return (
              <div
                key={testimonial.id}
                className={`testimonial ${isActive ? 'active' : ''} ${isPrevious ? 'previous' : ''} ${isNext ? 'next' : ''}`}
              >
                <img src={testimonial.photoUrl} alt={testimonial.name} className="testimonial__photo" />
                <p>{testimonial.position}</p>
                <img src={testimonial.country} alt={testimonial.name} className="testimonial__country" />
                <h1>{testimonial.name}</h1>
                <span>{testimonial.testimonial}</span>
                <div className="container_testimonials-social">
                  <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social_linkedin">
                    <FaLinkedin />
                  </a>
                  <a href={testimonial.githubUrl} target="_blank" rel="noopener noreferrer" className="social_FaGithub">
                    <FaGithub />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="slider-button prev" onClick={handlePrevSlide}>
        Prev
      </button>
      <button className="slider-button next" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default SliderTestimonials;
