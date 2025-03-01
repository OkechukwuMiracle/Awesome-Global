/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HeroBg': "url('/assets/s819.webp' ) "
      },
      fontFamily: {
        'poppins': ['Poppins', 'Serif'],
      },
      colors: {
        primary: '#f42c37',
        secondary: '#f42c37',
        brandYellow: '#fdc62e',
        brandGreen: '#2dcc6f',
        brandBlue: '#1376f4',
        brandWhite: '#eeeeee'

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem', 
          
        }
      }
    },
  },
  plugins: [],
}

