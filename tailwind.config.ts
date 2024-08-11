import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: { max: '640px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        brand: '#31363b',
        brandAlt: '#31363b',
        brandLight: '#f9fafb',
        payPal: 'hsl(42, 100%, 61%)',
        payPalDark: 'hsl(42, 100%, 51%)',
        text: 'rgb(107 114 128)',
      },
      fontSize: {
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3.5rem',
        '4xl': '7rem',
      },
      spacing: {
        page: '80%',
      },
    },
  },
  plugins: [],
};

export default config;
