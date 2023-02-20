const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#34495E",
      light: "#F8F8F8",
      pink: "#FF557B",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["var(--inter-font)", ...fontFamily.sans],
        Mont: ["var(--montserrat-font)", ...fontFamily.sans],
      },
      animation: {
        fade: "fadeRound .8s ease-in-out ",
      },
      keyframes: () => ({
        fadeRound: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      }),
    },
  },
  plugins: [],
}
