/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
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
    colors:{
      lightBg: "#E2E8F0",
      lightBgPrimary: "#F8FAFC",
      lightBgSecondary: "0F1725",
    }
  },
  plugins: [],
};
