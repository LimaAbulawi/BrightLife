/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'homeIntro': "url('/assets/bg.svg')",
      }
    },
  },
  plugins: [],
}
