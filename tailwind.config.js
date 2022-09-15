/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",     //says anthinng those folders are "tailwindable"
    "./components/**/*.{js,ts,jsx,tsx}",
    "./out/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
