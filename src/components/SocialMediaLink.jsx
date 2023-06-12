import './styles/SocialMediaLink.css';

const SocialMediaLink = ({ name, url, icon }) => (
  <li>
    <a
      href={url}
      target="_blank"
      className="footer__socialmedia_link"
      rel="noopener noreferrer"
    >
      <div>
        <p>{icon}</p>
        <span>{name}</span>
      </div>
    </a>
  </li>
);

export default SocialMediaLink;
