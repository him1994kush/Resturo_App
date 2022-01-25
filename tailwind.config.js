module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#455954',
        'offWhite': '#e6e6e6',
        'gray': '#565c5e',
        'brown': '#9d7463',
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      
      fontWeight: {
        boldest: 1000,
      },

    },
  },
  plugins: [],
}
