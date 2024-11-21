/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        smoothOpening: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        smoothOpening: 'smoothOpening 1s ease-in-out forwards',
      },

      colors: {
        customGreen: "#0B4525",
        customDarkGreen: "#08311a",
        customPink: "#F7A49D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
