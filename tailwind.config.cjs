/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Cyan: 'hsl(180, 66%, 49%)',
        DarkViolet: 'hsl(257, 27%, 26%)',
        GrayishViolet: 'hsl(257, 7%, 63%)',
      },
    },
  },
  plugins: [],
};
