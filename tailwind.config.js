module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpleFooterLeft: "#1E143C",
        purpleFooterRight: "#1A1138",
        itemCard: "rgba(167, 139, 250, 0.18)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
