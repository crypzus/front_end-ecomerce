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
        primary: "#e033ff",
        secondary: "#5B0E66",
        tercero: "#ffffff",
        cuarto: "#8e04f9",
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
