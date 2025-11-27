/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'high-lime': '#2ff008',
      },
      height:{
        'cus-height': "98vh",
        'image-height': "39.555rem"
      },
      clipPath: {
        'circle-small': 'circle(9.9% at 50% 50%)',
      },
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "x-15": "15deg",
        "x-0": "0deg",
      },
    },
  },
  plugins: [],
}

