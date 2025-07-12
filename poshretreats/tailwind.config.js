/** @type {import('tailwindcss').Config} */
export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        bounceOutward: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0)",
          },
          "60%": {
            transform: "translate(-50%, -50%) scale(1.1)",
          },
          "80%": {
            transform: "translate(-50%, -50%) scale(0.95)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        "bounce-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "80%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        // Optional: Simple fade/slide in for the text
        "fade-in-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 5px #00ff00, 0 0 10px #00ff00" },
          "50%": { textShadow: "0 0 15px #00ff00, 0 0 20px #00ff00" },
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
        "bounce-up": "bounce-up 1s ease forwards",
        bounce: "bounce 1s ease-in-out infinite",
        "text-glow": "glow 1.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s ease forwards",
        "bounce-outward": "bounceOutward 1s ease-out forwards",
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
        pacifico: ["Pacifico", "cursive"],
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
