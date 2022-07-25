/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkest: '#2d313e',
      darker: '#373e51',
      dark: '#535b71',
      white: '#ffffff',
      'light-white': '#f3f3f3',
        primary: '#638181',
      secondary: '#bfcdcd',
      tertiary: '#8597a3',
      'accent-1': '#2d435b',
      'accent-2': '#ff9f7c',
      'accent-3': '#eab66a',
      success: '#578161',
      warn: '#ead071',
      danger: '#8e3b3b'
    },
    extend: {

    },
  },
  plugins: [],
}
