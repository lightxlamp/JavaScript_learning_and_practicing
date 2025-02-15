/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }, 
      gridTemplateColumns: {
        '70/30': '69% 29%'
      }
    },
  },
  plugins: [],
}