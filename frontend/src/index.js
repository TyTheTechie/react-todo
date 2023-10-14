import React from 'react';
import { ThemeProvider } from './context/themeContext';
import App from './App';
import 'tailwindcss/tailwind.css';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);