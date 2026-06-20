/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a8b8',
          400: '#ed6f8b',
          500: '#e24068',
          600: '#c9204a',
          700: '#a8163b',
          800: '#7a1828',
          900: '#5a1020',
          950: '#3a0818',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#f5e0a0',
          400: '#e8c87a',
          500: '#c9a84c',
          600: '#a07830',
          700: '#7a5820',
          800: '#5a3c14',
          900: '#3a240c',
        },
        navy: {
          50: '#eff3ff',
          100: '#dce4ff',
          200: '#b9ceff',
          300: '#8aaeff',
          400: '#5680f8',
          500: '#2e58ef',
          600: '#1e3ed4',
          700: '#1a2fac',
          800: '#1a2744',
          900: '#0e1a30',
          950: '#080e1e',
        },
        cream: '#faf8f3',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e8d080 40%, #c9a84c 60%, #a07830 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #9a2038 0%, #c02848 40%, #9a2038 60%, #6a1020 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1a2744 0%, #243560 40%, #1a2744 60%, #0e1a30 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
