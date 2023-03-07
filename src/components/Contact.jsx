import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './styles/Contact.css'
import hoverSound from '../assets/sound.mp3';


const Contact = () => {

  const playSound = () => {
    const audio = new Audio(hoverSound);
    audio.play();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    form.submit();
    form.reset();
  };


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div name="contact" className="container__contact">

      <form className="contact__form"
        action="https://getform.io/f/6eafabcb-9fe4-43cf-82bb-03d9a9ec823e"
        method="POST"
        onSubmit={handleFormSubmit}
        data-aos="zoom-out">

        <label> Name: </label>
        <input type="text" name="name" required placeholder="Enter a name" />

        <label> Email: </label>
        <input type="email" name="email" required placeholder="Enter a email" />

        <label> Message: </label>
        <textarea type="text" name="message" required placeholder="Enter a message" />

        <button type="submit" onMouseEnter={playSound} onMouseLeave={() => { }} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
