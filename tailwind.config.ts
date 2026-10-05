import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#7B1230',
          teal: '#1FB5AD',
          leaf: '#5FA33A',
          sun: '#F28B1F',
          mist: '#F7F3F4',
          ink: '#241A1E',
          night: '#16090E',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        brand: ['var(--font-brand)', 'Georgia', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: { float: 'float 9s ease-in-out infinite' },
    },
  },
  plugins: [],
};

export default config;
