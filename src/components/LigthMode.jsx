import React, { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import './styles/LigthMode.css'

const LigthMode = () => {
  const [isLigthMode, setIsLigthMode] = useState(false);

  const handleToggle = () => {
    setIsLigthMode(!isLigthMode);
    document.body.classList.toggle('Ligth__Mode');
  };

  return (
    <button className='buttton_handleToggle' onClick={handleToggle}>
      {isLigthMode ?   <BsFillMoonFill className="moon-icon" />:<BsFillSunFill className="sun-icon" />}
    </button>
  );
};

export default LigthMode;
