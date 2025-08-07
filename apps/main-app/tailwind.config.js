const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // 交易平台专用颜色
        bull: {
          DEFAULT: '#00C89F', // 涨价绿色
          50: '#ECFDF5',
          100: '#D1FAE5', 
          500: '#00C89F',
          600: '#059669',
          700: '#047857',
        },
        bear: {
          DEFAULT: '#F23645', // 跌价红色
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#F23645',
          600: '#DC2626',
          700: '#B91C1C',
        },
        chart: {
          bg: '#1A1A1A',
          grid: '#2A2A2A',
          text: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  darkMode: 'class',
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          background: '#000000',
          foreground: '#FFFFFF',
          primary: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
            DEFAULT: '#F59E0B',
            foreground: '#000000'
          }
        }
      },
      light: {
        colors: {
          background: '#FFFFFF',
          foreground: '#11181C',
          primary: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F59E0B',
            600: '#D97706',
            700: '#B45309',
            800: '#92400E',
            900: '#78350F',
            DEFAULT: '#F59E0B',
            foreground: '#FFFFFF'
          }
        }
      }
    }
  })]
}; 