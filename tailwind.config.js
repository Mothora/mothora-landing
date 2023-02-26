/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mothora-primary": "#E6C171",
        "mothora-hover": "#F2D18A",
        // "mothora-secondary": "#0f2d2d",
        "mothora-sky-2": "#608982ff",
        // "mothora-primary": "#FDC485ff",
        // "mothora-hover": "#FFCA8Aff",
        "mothora-dark": "3D1F1Fff",
        "mothora-sky": "#A0D6C2ff",
        "mothora-secondary": "#885944ff",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    animation: {
      text: "text 5s ease infinite",
    },
    keyframes: {
      text: {
        "0%, 100%": {
          "background-size": "100% 100%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
