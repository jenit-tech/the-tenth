/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      rubik: ['var(--font-rubik)'],
      manrope: ['var(--font-manrope)'],
    },
    extend: {},
  },
  plugins: [],
}
