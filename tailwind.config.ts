import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smm:"425px",
      sm: '640px',
      md: '768px',
      'mid': "991px",
      lg: '1024px',
      xl: '1250px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'light-green-34': 'rgba(234, 245, 243, 0.34)',
        'light-green': 'rgb(234,245,243)',
        'primary': '#252533',
        'green': '#1c786d',
        'green-30': 'rgba(28,120,109,0.3)',
        'gray': '#a5a1ab'
      },
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '30px': '30px',
        '34px': '34px',
        '40px': '40px',
        '46px': '46px',
        '50px': '50px'
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      lineHeight: {
        '120%': '1.2',
        '133%': '1.33',
        '136%': '1.36',
        '144%': '1.44',
        '150%': '1.5',
        '157%': '1.57',
        '167%': '1.67'
      },
    },
  },
  plugins: [],
};
export default config;
