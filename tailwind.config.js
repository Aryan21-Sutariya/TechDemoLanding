import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial','Noto Sans','sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(16,185,129,0.15)',
      },
    },
  },
  plugins: [typography],
}
