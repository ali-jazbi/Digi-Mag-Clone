/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
      colors: {
        digiRed: "#ef394e",
        digiBlue: "#008eb2",
      },
    },
  },
  plugins: [],
};
