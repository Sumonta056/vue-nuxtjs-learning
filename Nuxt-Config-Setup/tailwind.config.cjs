const tokens = require('./styles/tokens')

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: tokens.screens,
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
    },
  },
  plugins: [],
}
