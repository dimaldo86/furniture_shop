/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'main': '#2A254B',
        'link': '#726E8D',
        'title':'#22202E',
        'text':'#5B5676',
        'border':'#4E4D93',
        'lightGray':'#e0dcdc'
        },
        fontFamily: {
          'satoshi':['Satoshi', 'sans-serif']
        },
    },
  },
  plugins: [],
}
