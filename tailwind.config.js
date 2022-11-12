/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["emerald"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1240px",
      "2xl": "1496px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "0.5rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      strokeWidth: {
        max: "8px",
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        darkOne: "#1c1917",
        darkTwo: "#292524",
        darkThree: "#44403c",
        primaryTint: "#065f46",
        primaryLight: "#f0fdfa",
        primary: "#064e3b",
        primary50: "#ecfdf5",
        primary100: "#ecfdf5",
        primary200: "#ecfdf5",
        primary300: "#ecfdf5",
        primary400: "#ecfdf5",
        primary500: "#ecfdf5",
        primary600: "#ecfdf5",
        primary700: "#ecfdf5",
        primary800: "#ecfdf5",
        lighterGray: "#ddd",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0 35px 60px -15px rgba(0, 0, 0, 0.5)",
      },
      scale: {
        25: "0.35",
      },
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "3xl-light": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2.875rem",
          {
            lineHeight: "4.25rem",
            letterSpacing: "-0.01em",
            fontWeight: "900",
          },
        ],
        "4.5xl": [
          "3.875rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.03em",
            fontWeight: "500",
          },
        ],
        "5xl": [
          "5.875rem",
          {
            lineHeight: "5.25rem",
            letterSpacing: "0.01em",
            fontWeight: "900",
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
};
