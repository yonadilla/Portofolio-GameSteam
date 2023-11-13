/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "background_Darkmod" : "#0d1b2a",
        "sidebar_Darkmode" : "#1b263b",
        "text_Darkmode" : "#e0e1dd",
        "nav_Darkmode" : "#415a77",
        "navCurrent_Darkmode" : "#778da9",
        "background" : "#edf6f9",
        "sidebar" : "#006d77" ,
        "text" :  "#83c5be",
        "nav" : "#ffddd2",
        "navCurrent" : "#e29578",
      },
      fontFamily: {
        "raleway" : ["Raleyway", "sans-serif" ],
        "sora" : ["Sora"]
      },
      backgroundImage: {
        "image-interior" : "url('/src/assets/my_interior/Screenshot (73).png')"
      }
    },
    
    
  }
  ,
  plugins: [],
}

