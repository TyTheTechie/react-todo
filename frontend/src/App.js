import React, { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import TaskList from './components/TaskList';
import LightbulbToggle from './components/LightbulbToggle';
import 'tailwindcss/tailwind.css';

function App() {
  const { darkMode: isDarkModeActive } = useContext(ThemeContext);

  return (
    <div className={isDarkModeActive ? 'min-h-screen bg-dark-background flex items-center justify-center' : 'min-h-screen bg-light-background flex items-center justify-center'}>
      <div className={isDarkModeActive ? 'bg-dark-surface p-8 rounded shadow-lg' : 'bg-light-surface p-8 rounded shadow-lg'}>
        <LightbulbToggle />
        <h1 className={isDarkModeActive ? "text-2xl mb-4 text-center text-light-primary" : "text-2xl mb-4 text-center text-dark-primary"}>Things To Do</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
