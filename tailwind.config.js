/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }

      xxxl: "1600px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        body: ["Poppins", "sans-serif"],
        title: ["Cabinet Grotesk", "sans-serif"],
      },

      colors: {
        // Add your custom color
        colorDark: "#0A0A0A",
        colorOrange: "#FF6A16",
        colorGrey: "#7B7B7B",
        colorGreyLight: "#797979",
        colorGreyDark: "#141414",
        colorGreyWhite: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
