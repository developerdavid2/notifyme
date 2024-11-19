/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          //Primary
          2: "#FFC876",
          3: "#fea300",
          4: "#754c02",
          //Secondary
          5: "#cbaffc",
          1: "#AC6AFF",
          6: "#28035b",
          //Accent Color
          7: "#d9fcaf",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          // Lighter Shades
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          // Dark Shades
          5: "#474060",
          6: "#1B1B2E",
          7: "#15131D",
          8: "#0E0C15",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
      flex: {
        50: "0 0 50%",
        320: "1px 0 320px",
        300: "0 0 300px",
        540: "0 0 540px",
        280: "0 0 280px",
        256: "0 0 256px",
        100: "0 0 100%",
      },
      screens: {
        "max-sm": { max: "710px" },
        "max-md": { max: "959px" },
        "max-lg": { max: "1139px" },
        "max-xl": { max: "1319px" },
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        "logo-scale": "scale-up-down 2s infinite ease-in-out",
        "pulse-border": "pulse-border 2s infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        "scale-up-down": {
          "0%, 100%": {
            transform: "scale(1.2)",
            opacity: "1",
            filter: "grayscale(0%)",
          },
          "50%": {
            transform: "scale(0.8)",
            opacity: "0.5",
            filter: "grayscale(100%)",
          },
        },
        "pulse-border": {
          "0%, 100%": {
            opacity: "0.2",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@pyncz/tailwind-mask-image")],
});
