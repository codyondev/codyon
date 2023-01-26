const colors = {
  mint: '#ABE8F0',
  kakao: '#FFEA2C',
  darkmint: '#45C6D7',
  'gray-29': '#E9E9E9',
  'gray-75': '#757575',
  'gray-88': '#B8B8B8',
  'gray-778': '#F7F7F8',
};

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
        gnb: '0px 0px 61px 12px rgba(134, 168, 175, 0.07)',
      },
      backgroundColor: {
        ...colors,
        main: '#F6F7F8',
        logo: 'inear-gradient(180deg, #888888 10.94%, #000000 55.73%);',
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
      colors: { ...colors },
      borderColor: {
        ...colors,
      },
      outlineColor: {
        ...colors,
      },
      fontFamily: {
        default: ['Pretendard Variable'],
      },
    },
  },
  plugins: [],
};
