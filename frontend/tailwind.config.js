module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mjs}', 
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#3700B3',
        'dark-background': '#121212',
        'dark-surface': '#121212',
        'light-primary': '#BB86FC',
        'light-secondary': '#3700B3',
        'light-background': '#FFFFFF',
        'light-surface': '#FFFFFF',
        'expanded-bg': '#E5E7EB',  
      },
      padding: {
        'expanded': '1.5rem',  
      },
      boxShadow: {
        'expanded': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',  
      }
    },
  },
  plugins: [],
}
