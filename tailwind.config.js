/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'drop': '#F8F8F8',
        'featurebg':'#E8F2EE',
        'primary': '#5BB5A2',
        'dark':'#1A191E',
        'bordergray':'#E8E8E8'
      },
      fontFamily: {
        'dm':"'DM Sans',sans-serif"
      }
    },
  },
  plugins: [],
}