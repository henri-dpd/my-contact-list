/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      dark: '#1a1a1a',
      darkGrey: '#626262',
      grey: '#888888',
      lightGrey: '#b4b4b4',
      light: '#f9f9f9',
      white: '#ffffff',
    },
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
