import React from 'react';
import './styles/ButttonModern.css';

const ButtonModern = ({ content }) => {
  return (
    <button className="buttton__modern" type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </button>
  );
};

export default ButtonModern;
