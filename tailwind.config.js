/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
 
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        ...defaultTheme.screens,
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}