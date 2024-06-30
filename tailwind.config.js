/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color: {
        primary: "#0ea5e9",
        light: "#eeeeee",
        stars: "#ffc639",
        secondary: "#393e46",
        subHeading: "#D3D1D1",
        dark: "#1e293b",
      },
    },

    screens: {
      xs: "450px",

      sm: "610px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
