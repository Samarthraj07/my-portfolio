/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'app-background': '#030637',
        'left-side-col': '#3C0753'
      },
    },
  },
  plugins: [],
}