
// import { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    'content/**/*.md',
    'node_modules/@lui-ui/lui-vue/dist/*.{js,txt}',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}'
  ],
  plugins: [
    require('@tailwindcss/typography')
    // ...
  ],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      themeColor: '#FF572F',
      primary: { DEFAULT: colors.gray[500], ...colors.gray },
      secondary: { DEFAULT: colors.blue[500], ...colors.blue },
      success: { DEFAULT: colors.green[500], ...colors.green },
      warning: { DEFAULT: colors.yellow[500], ...colors.yellow },
      danger: { DEFAULT: colors.red[500], ...colors.red },
      info: { DEFAULT: colors.cyan[500], ...colors.cyan }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    }
  }
}
