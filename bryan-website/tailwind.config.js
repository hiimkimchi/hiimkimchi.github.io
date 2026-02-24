/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wii: {
          bg: '#dcdcdc',
          bar: '#b8b8b8',
          ring: '#5bbcd6',
        },
      },
      fontFamily: {
        wii: ['"Trebuchet MS"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
