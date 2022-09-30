/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 300px) { ... }

      'md': '1100px',
      // => @media (min-width: 1100px) { ... }

      'lg': '1300px',
      // => @media (min-width: 1300px) { ... }
    },
    extend: {
      backgroundImage: {
        'forest-image': 'url("./assets/bg1.png")',
        'lake-image': 'url("./assets/bg2.png")',
      },
      backgroundVideo: {
        'hero-section': "url('/assets/borobudur.webm')",
      },
    },
  },
  plugins: [],
};
