/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#7C3AED", // violet purple
          600: "#6D28D9",
          700: "#5B21B6",
        },
        dark: "#0F0F1A",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #1E0B3D, #0F0F1A)",
      },
    },
  },
  plugins: [],
};
