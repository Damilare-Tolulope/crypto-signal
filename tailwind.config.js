/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B6FF",
        secondary: "#32393C",
        dark: "#131313",
        semidark: "#191A1B",
        light: "#2C2C2C",
      }
    },
  },
  plugins: [],
}

