/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#f07168",
"secondary": "#0081a8",
"accent": "#43135b",
"neutral": "#2f2f2f",
"success": "#ffb782",
"base-100": "#ffffff",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

