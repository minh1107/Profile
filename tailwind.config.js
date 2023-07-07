/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        link: '#003ECB',
        main: '#179DD9',
        borderCustom: '#5689FB',
        yellowCustom: '#FBA61B',
        greenCustom: '#1db0f5',
        blueCustom: 'white',
        orangeCustom: '#F1C50E',
        tomatoCustom: '#DD6665'
      },
      fontFamily: {
        ubuntu: 'Ubuntu'
      },
      keyframes: {
        moveUp: {
          '0%': {
            transform: 'translate(-50%,-40%)'
          },
          '100%': {
            transform: 'translate(-50%,-50%)'
          }
        }
      },
      animation: {
        moveUp: 'moveUp 0.5s forwards'
      }
    },
  },
  plugins: [],
}