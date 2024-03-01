/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{json,js,liquid}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
