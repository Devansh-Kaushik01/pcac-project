/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "blue" : "#0057FF",
        "gray" : "#A3A3A3",
        "lightgray":"#595959",
        "lightgray-100": "#EEEEEE"
      },
      backdropBlur: {
        xs: '6px',
      }
    },
  },
  plugins: [],
});
export default withMT;
