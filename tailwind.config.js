/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040814',
          900: '#070E22',
          850: '#0B1533',
          800: '#0F1E47',
          750: '#15295F',
          700: '#1C357A',
          600: '#2547A1',
        },
        gold: {
          100: '#FBF5DF',
          200: '#F5E6B5',
          300: '#EED385',
          400: '#E5C058',
          500: '#D4AF37', // Classic Metallic Gold
          600: '#BA9324',
          700: '#947215',
          800: '#6E520D',
        },
        silver: {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(212, 175, 55, 0.25)',
        'gold-md': '0 0 25px -4px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 0 40px -6px rgba(212, 175, 55, 0.45)',
        'navy-card': '0 20px 40px -15px rgba(2, 6, 23, 0.85)',
      }
    },
  },
  plugins: [],
}
