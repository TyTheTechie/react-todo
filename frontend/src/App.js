// src/App.js
import React, { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import TodoList from './components/TodoList';
import LightbulbToggle from './components/LightbulbToggle';
import 'tailwindcss/tailwind.css';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'min-h-screen bg-dark-background flex items-center justify-center' : 'min-h-screen bg-light-background flex items-center justify-center'}>
      <div className={darkMode ? 'bg-dark-surface p-8 rounded shadow-lg' : 'bg-light-surface p-8 rounded shadow-lg'}>
        <LightbulbToggle />
        <h1 className={darkMode ? "text-2xl mb-4 text-center text-light-primary" : "text-2xl mb-4 text-center text-dark-primary"}>Things To Do</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
