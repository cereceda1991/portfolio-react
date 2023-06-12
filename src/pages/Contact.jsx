// 1. Importaciones de iconos de React
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

// 2. Importación de estilos y componentes
import ButtonModern from '../components/ButtonModern';
import SideBar from '../components/SideBar';
import './styles/Contact.css';

// 3. Backend
import { DataApi } from '../api/DataApi';

const Contact = () => {
  const languageData = DataApi();

  if (!languageData) {
    return <div>Cargando datos...</div>;
  }

  // Accede a la información del idioma en tu componente
  const { title, form, email, address, content } = languageData.contact;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.submit();
    form.reset();
  };

  return (
    <main className="container__contact">
      <section className="info__personal">
        <h1>{title}</h1>
        <p>{content}</p>
        <h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:cereceda1991@gmail.com"
          >
            <HiOutlineMail /> {email}
          </a>
        </h4>
        <h4>
          <BiMap /> {address}
        </h4>
      </section>
      <section className="container__form">
        <span className="login__circuit-mask"></span>
        <form
          className="contact__form"
          action="https://formspree.io/f/xlekqeez"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <label>{form.fullNameLabel}</label>
          <input
            type="text"
            name="name"
            placeholder={form.fullNamePlaceholder}
            required
          />

          <label>{form.emailLabel}</label>
          <input
            type="email"
            name="email"
            placeholder={form.emailPlaceholder}
            required
          />

          <label>{form.messageLabel}</label>
          <textarea
            type="text"
            name="message"
            placeholder={form.messagePlaceholder}
            required
          />
          <ButtonModern type="submit" content={form.submitButton} />
        </form>
      </section>
      <SideBar />
    </main>
  );
};

export default Contact;
