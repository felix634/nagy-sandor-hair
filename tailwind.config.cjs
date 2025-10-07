/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ez a content tömb mondja meg a Tailwind-nek, hol vannak az osztályok
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Egyedi színpaletta a logóhoz igazítva
        'silver': '#CCCCCC',
        'black-alt': '#1a1a1a',
      }
    },
  },
  plugins: [],
}