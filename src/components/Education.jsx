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
        <div key={index}>
          <div className="subsection_dates">
            <h2>
              <Link to={institution.link} target="_blank">
                {institution.institution}
              </Link>
            </h2>
            <span> {institution.date}</span>
          </div>
          <h3>{institution.degree}</h3>
        </div>
      ))}
    </section>
  );
};

export default Education;
