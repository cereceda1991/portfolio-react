import React, { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import './styles/HandleLigthMode.css';

function LightModeToggle() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('Light__Mode');
  };

  return (
    <section
      className={`toggle toggle--${isLightMode ? 'light' : 'dark'}`}
      onClick={handleToggle}
    >
      <div className="toggle__track">
        <div
          className={`toggle__handle toggle__handle--${
            isLightMode ? 'light' : 'dark'
          }`}
        />
        <div
          className={`toggle__icon toggle__icon--${
            isLightMode ? 'sun' : 'moon'
          }`}
        >
          {isLightMode ? <BsSunFill /> : <BsMoonFill />}
        </div>
      </div>
    </section>
  );
}

export default LightModeToggle;
