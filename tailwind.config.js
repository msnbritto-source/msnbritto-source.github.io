/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        primary: "#1E40AF", // Navy blue
        accent: "#F59E0B",  // Amber
        dark: "#111827",   // Dark gray
        light: "#F9FAFB",  // Light gray
      },
    },
  },
  plugins: [],
}
