/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    'main': '#2A254B',
    'link': '#726E8D',
    'title':'#22202E',
    'text':'#5B5676'
    },
    fontFamily: {
      'sans':["'Satoshi'", 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [],
}
