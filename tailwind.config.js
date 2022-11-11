/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '488px' },

    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        titleColor: '#3A4562',
        desСolor: '#878D9D',
        pagColor: '#70778B',
        pagActiveColor: '#5876C5',
        btnColor: '#384564',
        mapTitle: '#E7EAF0',
        mapText: '#E8EBF3',
      },
    },
  },
  plugins: [],
};
