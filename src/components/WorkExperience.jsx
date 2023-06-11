import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkExperience = ({ experience }) => {
  return (
    <section className="section_dates">
      <h1>
        <FaBriefcase /> {experience.title}
      </h1>
      {experience.works.map((work, index) => (
        <div className="container_dates" key={index}>
          <Link to={work.companyLink} target="_blank">
            <h2> {work.company}</h2>
          </Link>
          <div className="experiencie__dates">
            <h3>{work.positions}</h3>
            <p>{work.time}</p>
          </div>
          <p>{work.detail}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
