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
        "gray" : "#595959",
        "graybtn" : "#F8F8F9",
        "lightgray":"#A3A3A3",
        "lightgray-100": "#EEEEEE",
        "gray-600": "#0A142F"
      },
      backdropBlur: {
        xs: '6px',
      },
      boxShadow: {
        '3xl': '10px 35px 80px 5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
});
export default withMT;
