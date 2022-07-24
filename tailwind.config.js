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
    },
  },
  plugins: [],
};
