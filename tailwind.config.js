/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["jakarta"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#FF8811 2px, transparent 0)",
      },
      backgroundSize: {
        "back-size": "30px 30px",
      },
    },
    screens: {
      "2xl": { max: "1650px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1366px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1180px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
