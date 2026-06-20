/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // blue accent palette used across the site
        accent: {
          DEFAULT: "#3b82f6", // blue-500
          dark: "#2563eb", // blue-600
          light: "#60a5fa", // blue-400
        },
        dark: {
          DEFAULT: "#0f172a", // slate-900 (page background)
          card: "#1e293b", // slate-800 (card background)
          border: "#334155", // slate-700
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
