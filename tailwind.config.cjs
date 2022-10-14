/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '5rem',
        xl: '7rem',
        '2xl': '9rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
