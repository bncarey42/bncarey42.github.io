export const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'light-white': '#f3f3f3',
      'light': '#E1DCCB',
      'dark': '#4C4E51',
      'accent' : '#BB9039',
      'primary': "#86936A",
      success: '#578161',
      warn: '#DAB854',
      danger: '#8e3b3b'
    },
    extend: {
      backgroundImage: {
        "torc-head": 'url("../RI:TorcHead:Walkway.jpg")',
        "causeway": 'url("../NI:GiantsCauseway:Stones.jpg")'
      },
      fontFamily: {
        'display': ['Inconsolata', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default config
