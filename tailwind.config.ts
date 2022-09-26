
import { Config } from 'tailwindcss'
export default <Config> {
  darkMode:"class",
  content: [
    'content/**/*.md'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
  theme: {
    extend: {}
  },
}