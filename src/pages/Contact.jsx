import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './styles/Contact.css'
import playSound from "../utils/playSound";
import SideBar from "../components/SideBar";
import './styles/FormContact.css'

const Contact = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.submit();
    form.reset();
  };


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="container__contact">
      <section>
        <h1>Si deseas obtener más información, puedes ponerte en contacto conmigo a través de este formulario o mediante mis redes sociales. Estaré encantado de responder a tus consultas y brindarte la información que necesites.</h1>
      </section>
      <div class="login">
        <h1 class="login__heading">Iniciar sesión</h1>
        <span class="login__circuit-mask"></span>
      </div>
      <section>
        <form className="contact__form"
          action="https://getform.io/f/6eafabcb-9fe4-43cf-82bb-03d9a9ec823e"
          method="POST"
          onSubmit={handleFormSubmit}
          data-aos="zoom-out">

          <label> Full Name: </label>
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
      </section>
      <SideBar />
    </main>
  );
};

export default Contact;
