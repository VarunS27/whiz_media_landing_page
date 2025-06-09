/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        floatYrev: "floatYrev 7s ease-in-out infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        floatYrev: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      fontFamily: {
        sans: ['anton','Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        purple: {
          500: "#7C3AED",
          600: "#6B21A8",
          700: "#4C1D95",
        },
        backdropBlur: {
          xs: '2px',
      },
        fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      },
    },
  },
  variants: {},
  plugins: [],
};
