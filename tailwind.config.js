const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.teal,
      },
      fontFamily: {
        poppins: "Poppins",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      opacity: ["disabled"],
      cursor: ["disabled"]
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
