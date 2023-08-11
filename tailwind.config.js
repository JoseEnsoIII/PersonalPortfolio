/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':'280px',
      // => @media (min-width: 640px) { Mobile }
      'md': '720px',
      // => @media (min-width: 640px) { TABLET}

      'xl': '1024px',
      // => @media (min-width: 1024px) { LAPTOP }

      'xxl': '1281px',
      // => @media (min-width: 1280px) { DESKTOP }
      'xxxl': '1800px',
      // => @media (min-width: 1280px) { DESKTOP }
    },
    extend: {
      boxShadow: {
        'mmd':'7px 4px 0px 0px rgba(0,0,0,0.75);',
        '3xl':'0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'animate': 'animate 5s ease-in-out infinite',
        'transition':'all 1s ease-in-out',
        'blob':'blob 5s ease-in-out infinite',
        wiggle: 'wiggle 0.7s ease-in-out infinite',

      
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }, // Removed percentage symbols (%)
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }, // Removed percentage symbols (%)
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }, // Removed percentage symbols (%)
        }

      },
      
    },
  },
  plugins: [],
}