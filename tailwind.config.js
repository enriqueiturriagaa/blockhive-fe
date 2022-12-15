const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-black": "#101010",
        "off-white": "#dddddd",
      },
      fontFamily: {
        DDC: ["DDC", "Helvetica", "Arial", "sans-serif"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "DDC",
          src: "url(/src/assets/fonts/DDCHardware-Regular.ttf)",
        },
      });
    }),
  ],
};
