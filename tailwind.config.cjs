/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{.js,.jsx}'],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik','sans-serif']
      },
      colors:{
        veryDarkGray:'hsl(0,0%,17%)',
        darkGray:'hsl(0,0%,59%)'
      }
    },
  },
  plugins: [],
}
