/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand color palette
        primary: {
          DEFAULT: "#0B2B4A", // Dark Navy
          light: "#1a4a7c",
        },
        accent: {
          DEFAULT: "#0FA3A3", // Sea-Teal
          dark: "#0c8282",
        },
        // Neutral colors for light/dark mode
        light: {
          background: "#FFFFFF",
          text: "#0A0F1A",
          muted: "#E6EEF2",
        },
        dark: {
          background: "#0A0F1A", // Near Black
          text: "#E6EEF2",
          muted: "#1a2c3f",
        },
      },
      spacing: {
        sidebar: "280px",
        "sidebar-collapsed": "72px",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};