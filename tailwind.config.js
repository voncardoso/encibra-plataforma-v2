/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    colors: {
      background: "#F4F3F1",
      "text-100": "#39332E",
      white: "#FFFFFF",
      "gold-100": "#FDF2E4",
      "gold-200": "#FBEAD7",
      "gold-300": "#F6B766",
      "gold-400": "#E2942F",

      "gray-200": "#F2F2F2",
      "gray-300": "#E6E6E6",
      "gray-400": "#A8A8A8",
      "gray-500": "#68635F",
      "gray-input": "#E5E5E3",

      "red-400": "#f87171",
      "red-500": "#ef4444",
      "red-800": "#991b1b",

      "sky-600": "##0284c7",
      "sky-600": "#0284c7"
       },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      mx: { max: "100vh" },
    },
    extend: {
      minWidth: {
        320: "320px",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
