import './styles/SocialMediaLink.css';

const SocialMediaLink = ({ name, url, icon }) => (
  <li>
    <a
      href={url}
      target="_blank"
      className="footer__socialmedia_link"
      rel="noopener noreferrer"
    >
      <span>{name}</span>
      <div>{icon}</div>
    </a>
  </li>
);

export default SocialMediaLink;
