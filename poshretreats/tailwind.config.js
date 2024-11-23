/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        smoothOpening: {
          "0%": {
            transform: "scaleX(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scaleX(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        smoothOpening: "smoothOpening 1s ease-in-out forwards",
        scroll: "scroll 20s linear infinite",
        "scroll-mobile": "scroll 30s linear infinite",
      },
      colors: {
        customGreen: "#0B4525",
        customDarkGreen: "#08311a",
        customPink: "#F7A49D",
        customWhite: "#FFFFFF",
        customBg: "#FAFFFC",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "10xl": "190px", // Explicitly define the class
      },
      screens: {
        sm: { min: "768px", max: "1024px" },
        tablet: { min: "768px", max: "1024px" },
        md: { min: "1025px", max: "1920px" }, // Covers typical desktop resolutions
        lg: { min: "1921px" }, // Define large desktops or higher resolutions
      },
    },
  },
  plugins: [],
};
