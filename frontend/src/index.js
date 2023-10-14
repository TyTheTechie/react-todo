import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/themeContext';
import App from './App';
import 'tailwindcss/tailwind.css';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
