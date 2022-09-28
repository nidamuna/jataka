/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
