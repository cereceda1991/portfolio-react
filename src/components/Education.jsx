import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Education = ({ education }) => {
  return (
    <section className="section_dates">
      <h1>
        <FaBookReader /> {education.title}
      </h1>
      {education.institutions.map((institution, index) => (
        <div className="container_dates" key={index}>
          <div className="experiencie__dates">
            <h3>
              <Link to={institution.link} target="_blank">
                {institution.institution}
              </Link>
            </h3>
            <p> {institution.date}</p>
          </div>
          <h3>{institution.degree}</h3>
        </div>
      ))}
    </section>
  );
};

export default Education;
