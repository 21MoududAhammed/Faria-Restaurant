/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        myYellow: "#BB8506",
        myTomato: "#FF574A",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
