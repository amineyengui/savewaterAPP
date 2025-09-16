/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'water-blue': '#007BFF', // Bleu principal pour titres, boutons
        'light-blue': '#ADD8E6', // Accent clair pour fonds, highlights
        'dark-blue': '#0056D2', // Bleu sombre pour hover, contrast
      },
    },
  },
  plugins: [],
});
