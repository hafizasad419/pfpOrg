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
        'lightBrown': '#d3d3d5fd',
        'darkBrown': '#463d3bfe',
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

// #e16a39fd - orange
// #d3d3d5fd - lightBrown
// #463d3bfe - darkBrown

