import React, { useState } from 'react';
import './styles/SliderTestimonials.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SliderTestimonials = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  const testimonialSlides = testimonials.map((testimonial, index) => (
    <div
      key={testimonial.id}
      className={`testimonial ${index === currentSlide ? 'active' : ''}`}
    >
      <img src={testimonial.photoUrl} alt={testimonial.name} className="testimonial__photo" />
      <p>{testimonial.position}</p>
      <h1>{testimonial.name}</h1>
      <span>{testimonial.testimonial}</span>
      <div className='container_testimonials-social'>
        <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className='social_linkedin'>
          <FaLinkedin />
        </a>
        <a href={testimonial.githubUrl} target="_blank" rel="noopener noreferrer" className='social_FaGithub'>
          <FaGithub />
        </a>
      </div>
    </div>
  ));

  return (
    <div className="slider_testimonials">
      <div className="slider-container">
        {testimonialSlides}
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
