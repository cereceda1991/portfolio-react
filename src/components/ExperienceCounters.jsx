import React from 'react';
import ProgressSummary from './ProgressSummary';
import './styles/ExperienceCounters.css';

const ExperienceCounters = ({ paragraphs }) => {
  return (
    <section className="experience__counters">
      {paragraphs.map((paragraph, index) => (
        <div className="card__counter" key={index}>
          <ProgressSummary value={paragraph.time} />

          <p>{paragraph.title}</p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceCounters;
