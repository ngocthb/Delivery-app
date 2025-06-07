/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx,jsx}',
    './src/screens/*.{js,ts,tsx,jsx}',
    './src/navigation/**/*.{js,ts,tsx,jsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF7F50',
          200: '#FF6347',
          300: '#FF4500',
          400: '#FFA500',
          500: '#FF8C00',
          600: '#ee8300',
        },
        accent: {
          100: '#FBFBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: '#8c8e98',
          200: '#666876',
          300: '#191d31',
        },
        danger: '#f75555',
      },
    },
  },
  plugins: [],
};
