module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      'subtitle': '#808080',
      'theme': '#fcb4bf',
      'secondary': "#e0a2ac",
      'white': '#ffffff'
    },
    fontFamily: {
      "display": ['"Abril Fatface"'],
      "body": ['"Poppins"'],
      "italic": ['"Libre Baskerville"'],
      "mono": ['"DM Mono"'],
      "handwritten": ['"Homemade Apple"'],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar'),],
}
