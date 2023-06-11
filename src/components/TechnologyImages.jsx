import './styles/TechnologyImages.css';

const TechnologyImages = ({ technologies }) => {
  console.log(technologies);
  return (
    <div className="technology_images">
      {technologies.map((technology, index) => (
        <img key={index} src={technology.image} alt={`Technology ${index}`} />
      ))}
    </div>
  );
};

export default TechnologyImages;
