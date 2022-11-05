/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

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
        backgroundImage: {
          'subscribe': "url('public/assets/img/subscribe/subscribe.jpg')",
        }
    },
  },
  plugins: [],
}
