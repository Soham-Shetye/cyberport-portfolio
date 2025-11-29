/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        neon: {
          green: '#00ff41',
          cyan: '#00f3ff',
          pink: '#ff00ff',
          dark: '#050505',
          dim: '#0a0a0a',
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '0.9' },
          '50%': { opacity: '1.0' },
          '100%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
} 
