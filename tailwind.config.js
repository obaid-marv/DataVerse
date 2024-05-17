/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'abeezee': ['ABeeZee', 'sans-serif'],
        'scp':["Source Code Pro", "monospace"],
        'poppins':["Poppins", 'sans-serif']
      },
      backgroundColor: {
        'themeblack': '#001C27',
        'theme':'#2D9CDB',
        'trackgrey':'#F2F2F2'
      },
      colors:{
        'theme':'#2D9CDB'
      },
      transitionProperty: {
        'height': 'height',
      },
      maxHeight: {
        '0': '0',
        'full': '1000px',
      },
    },
  },
  plugins: [],
}

