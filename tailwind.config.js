/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abeezee: ["ABeeZee", "sans-serif"],
        scp: ["Source Code Pro", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        themeblack: "#001C27",
        theme: "#2D9CDB",
        trackgrey: "#F2F2F2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(154.87deg, #001C27 27.65%, #2D9CDB 90.05%)",
        "custom-gradient2":
          "linear-gradient(180deg, #2D9CDB 51.54%, #eeeee4 100%)",
        "custom-gradient3":
          "linear-gradient(268.11deg, #5F2B38 32.16%, #C1914F 86.86%)",
      },
      colors: {
        theme: "#2D9CDB",
        customBlue: "#065a8a",
        customDarkBlue: "#001C27",
        textgrey: "#4F4F4F",
        trackgrey: "#F2F2F2",
      },
      transitionProperty: {
        height: "height",
      },
      maxHeight: {
        0: "0",
        full: "1000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
