import './styles/SocialMediaLink.css';

const SocialMediaLink = ({ name, url, icon }) => (
  <li>
    <a
      href={url}
      target="_blank"
      className="footer__socialmedia_link"
      rel="noopener noreferrer"
    >
      <div className="icons">{icon}</div>
    </a>
    <span>{name}</span>
  </li>
);

export default SocialMediaLink;
