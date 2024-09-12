/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#e16a39fd',
        'lightGray': '#d3d3d5fd',
        'darkGray': '#463d3bfe',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

// #e16a39fd - orange
// #d3d3d5fd - lightGray
// #463d3bfe - darkGray
