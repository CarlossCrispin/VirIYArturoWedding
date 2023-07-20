/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: {
          50: '#FDF7F3',
          100: '#FAEFE5',
          200: '#F6E6D6',
          300: '#F2DEC8',
          400: '#EEC6AB',
          500: '#EABD9C',
          600: '#C18D6B',
          700: '#9E6D49',
          800: '#7B4D27',
          900: '#582E06', // Tonos de cobre hasta aquí
        },
      },
    },
  },
  plugins: [],
};