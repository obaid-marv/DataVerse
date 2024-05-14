/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'abeezee': ['ABeeZee', 'sans-serif'],
        'scp':["Source Code Pro", "monospace"]
      },
      backgroundColor: {
        'themeblack': '#001C27',
        'theme':'#2D9CDB'
      },
      colors:{
        'theme':'#2D9CDB'
      }
    },
  },
  plugins: [],
}

