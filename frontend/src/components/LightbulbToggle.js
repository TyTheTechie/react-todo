import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as faLightbulbSolid } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../context/themeContext';

function LightbulbToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <FontAwesomeIcon icon={faLightbulbSolid} size="2x" style={{ color: "#FFC107" }} />
      ) : (
        <FontAwesomeIcon icon={faLightbulbRegular} size="2x" style={{ color: "#424242" }} />
      )}
    </div>
  );
}

export default LightbulbToggle;
