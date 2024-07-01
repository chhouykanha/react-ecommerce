/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#171717",
        secondary: "#f6e6cf"
      },
      fontFamily: {
         jost: ["Jost", "sans-serif"]
      }
    },
  },
  plugins: [],
}