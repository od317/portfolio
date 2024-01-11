/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    colors:{
        ...colors,
        transparent: 'transparent',
        current: 'currentColor',
       'white': '#ffffff',
       'dark':{
        1:'#121212'
       },
       'theme':'#0079FF',
       'theme2':'#FF004D'
    },
    extend: {
      animation: {
        blob: 'blob 6s ease-in-out infinite',
        bspin: 'bspin 40s infinite',
        x3:'x3 .7s ease-out',
        t3:'t3 1s ease-in-out'
      },
      keyframes: {
        blob: {
          '0%': { borderRadius: ' 60% 40% 30% 70%/60% 30% 70% 40% ' },
          '50%': { borderRadius: ' 30% 60% 70% 40%/50% 60% 30% 60% ' },
          '100%':{ borderRadius: ' 60% 40% 30% 70%/60% 30% 70% 40% '}
        },
        bspin:{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'}
        },
        x3:{
          '0%':{transform:'rotateX(-90deg)'},
          '100%':{transform:'rotateX(0deg)'},
        },
        t3:{
          '0%':{transform:'translateY(100%)'},
          '100%':{transform:'translateY(0%)'},
        }
      }
    },
  },
  plugins: [],
}

