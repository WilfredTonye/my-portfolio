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
      fontSize: {
        normal: '20px',
        small: '18px',
        large: '31px',
        subtitle:'50px',
        title: '80px',
      }
    },
  },
  plugins: [],
}
