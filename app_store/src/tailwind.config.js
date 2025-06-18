/** @type {import('tailwindcss').Config} */
// @ts-ignore
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // Archivos donde se usa Tailwind
  darkMode: "class",
  theme: {
    // Habilita el modo oscuro
    extend: {
      fontFamily: {},
      colors: {
        primary: "#E6007E",
        secondary: "#5B0E66",
        tertiary: "#d836ee",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
