import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './styles/Contact.css'
import SideBar from "../components/SideBar";
import ButtonModern from "../components/ButtonModern";

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
        <h1>If you want more information, you can contact me through this form or through my social networks. I will be happy to answer your questions and provide you with the information you need.</h1>
      </section>
      {/* <section className="login">
        <span className="login__circuit-mask"></span>
      </section > */}
      <section className="container__form">
        <span className="login__circuit-mask"></span>
        <form className="contact__form"
          action="https://getform.io/f/6eafabcb-9fe4-43cf-82bb-03d9a9ec823e"
          method="POST"
          onSubmit={handleFormSubmit}
          data-aos="zoom-out">

          <label> Full Name: </label>
          <input type="text" name="name" placeholder="Enter a name" required />

          <label> Email: </label>
          <input type="email" name="email" placeholder="Enter a email" required />

          <label> Message: </label>
          <textarea type="text" name="message" placeholder="Enter a message" required />
          <ButtonModern content='SEND' />
        </form>
      </section>
      <SideBar />
    </main>
  );
};

export default Contact;
