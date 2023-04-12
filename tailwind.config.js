/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3e4e55",
        primaryLight: "#4b5c63",
        primaryDark: "#36464d",
        text: "#24c1e0",
        acent: "#00ffba",
        pink: "#ffa5a9",
      },
      height: {
        160: "160px",
        560: "490px",
        460: "460px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      backgroundImage: {
        hr: "linear-gradient(90deg, rgba(36,193,224,1) 19%, rgba(0,255,186,1) 51%, rgba(36,193,224,1) 77%)",
      },
      boxShadow: {
        switches: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .6)",
      },
      gridTemplateColumns: {
        switches: "repeat(3, 1fr)",
      },
      gridTemplateRows: {
        switches: "repeat(4, minmax(80px, auto))",
      },
      gridTemplateAreas: {
        switches: ["a b c", "d e f", "g h f", "g h i"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
