/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        root: 'rgb(0 0 0 / 16%) 0px 0px 8px',
        card: '4px 10px 11px rgba(0, 0, 0, 0.06)',
      },
      backgroundColor: {
        main: '#F6F7F8',
      },
      maxWidth: {
        mobile: '440px',
      },
      fontSize: {
        root: '16px',
      },
      letterSpacing: {
        'very-tighter': '-0.06em',
      },
    },
  },
  plugins: [],
};
