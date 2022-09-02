/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_orange: "#FF8811",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["jakarta"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(custom_orange 2px, transparent 0)",
      },
      backgroundSize: {
        "back-size": "30px 30px",
      },
    },
    screens: {
      "2xl": { max: "1650px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1400px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1230px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
