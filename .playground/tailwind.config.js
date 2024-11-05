const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #1F338D 0%, #020821 100%)",
      },
      colors: {
        white: colors.white,
        black: colors.black,
        "heading-text": colors.slate[900],
        "body-text": colors.slate[600],
        "border-color": colors.slate[200],
        "muted-text": colors.slate[600],
        "disabled-text": colors.slate[400],
        "label-text": colors.slate[500],
        "input-bg": colors.slate[50],
        "bg-color": colors.white,
        primary: {
          50: "#EBF2FA",
          100: "#C2D9EF",
          200: "#9ABFE5",
          300: "#71A6DA",
          400: "#498CD0",
          500: "#2F73B6",
          600: "#25598E",
          700: "#1A4065",
          800: "#10273E",
          900: "#040B11",
          950: "#02060A",
        },
        warning: colors.amber,
        secondary: colors.slate,
        danger: {
          50: "#FEF4F5",
          100: "#FBE2E4",
          200: "#F7BEC3",
          300: "#F299A1",
          400: "#EE7580",
          500: "#E9515E",
          600: "#E31F30",
          700: "#B31724",
          800: "#81101A",
          900: "#500A10",
          950: "#2A0509", // Red için 950 tonu eklendi
        },
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          950: "#052E16", // Green için 950 tonu eklendi
        },
        info: colors.cyan,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
};
