/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#fecc29',
      secondary: '#ca9eee',
      primarystrong: '#cba221',
      background: '#fef6de',
      backgroundstrong: '#fe820e',
      black: '#000000',
      dark: '#141414',
      darkgrey: '#434343',
      grey: '#646464',
      lightgrey: '#B2B2B2',
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
