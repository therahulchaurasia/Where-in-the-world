/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: '"Nunito Sans"',
      },
      colors: {
        blue: {
          950: "#202c37", //dark-mode background
          1000: "#2b3945", //dark-mode element
        },
        gray: {
          950: "#858585", //light-mode input
          1000: "#111517", //light-mode text
        },
      },
      keyframes: {
        anim: {
          "0%": { transform: "rotate(45deg) translate(5px, 5px)" },
          "100%": { transform: "rotate(45deg) translate(-5px,-5px)" },
        },
        shadow: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        animaker: "anim 0.4s ease-in-out infinite alternate",
        shadowmaker: "shadow 0.4s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
