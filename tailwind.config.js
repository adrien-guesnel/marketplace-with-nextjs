module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpleFooterLeft: "#1E143C",
        purpleFooterRight: "#1A1138",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
