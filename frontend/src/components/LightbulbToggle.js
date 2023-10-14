import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as faLightbulbSolid } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../context/themeContext';

function LightbulbToggle() {
  const { darkMode: isDarkModeActive, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div 
      onClick={toggleDarkMode} 
      className="cursor-pointer inline-block p-2 rounded-full transition-colors duration-300 hover:bg-gray-200"
      aria-label="Toggle Dark Mode"
    >
      {isDarkModeActive ? (
        <FontAwesomeIcon icon={faLightbulbSolid} size="2x" className="text-yellow-400" />
      ) : (
        <FontAwesomeIcon icon={faLightbulbRegular} size="2x" className="text-gray-600" />
      )}
    </div>
  );
}

export default LightbulbToggle;
