/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",   // Deep blue (you can change)
        secondary: "#F59E0B", // Amber
        accent: "#10B981",    // Green teal
        dark: "#111827",      // Neutral dark
        light: "#F9FAFB",     // Neutral light
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],   // Modern clean font
        heading: ["Poppins", "sans-serif"], // For headings
        mono: ["Fira Code", "monospace"],   // Optional: coding-style font
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
