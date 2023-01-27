/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'sanctum' : "url('../public/img/sanctum-bg.jpg')"
    }},
  },
  plugins: [],
}