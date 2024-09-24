import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-color': 'rgb(15 23 42)',
        'primary': '#2D2D44',
        'secondary': '#33E1ED',
        'white': 'rgb(226 232 240)'
      }
    },
  },
  plugins: [],
}
export default config
