/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#349DF0',
        secondary: '#1F6DAD',
        backgroundgradiant: '#1E1E1E',
        background: '#0B0B0B',
        info: '#FFFFFF',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
