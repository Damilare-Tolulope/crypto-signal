/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B6FF",
        secondary: "",
        dark: "#131313",
        semidark: "#191A1B",
        light: "",
      }
    },
  },
  plugins: [],
}

