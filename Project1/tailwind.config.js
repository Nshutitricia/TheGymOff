/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }){
      addComponents({
        '.list-image-custom' : {
          listStyleType: 'none',
          listStyleImage: 'url(/img/Group 1120.svg)',
        },
      });
    },
  ],
}

