import React from 'react';
import './styles/PersonalInfo.css';

const PersonalInfo = ({ name, aboutInfo, phrase }) => {
  return (
    <section className="info__personal">
      <h1>{name}</h1>
      <div className="aboutme__info">
        {aboutInfo.map((info, index) => (
          <p key={index}>{info}</p>
        ))}
      </div>
      <div className="about__phrase">
        <h2>{phrase.title}</h2>
        <p>"{phrase.quote}"</p>
        <b>{phrase.author}</b>
      </div>
    </section>
  );
};

export default PersonalInfo;
