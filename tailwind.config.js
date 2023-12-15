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
        "neon-red" : {
          
  }
      },
      fontFamily: {
        "sora" : ["Sora"]
      },
      boxShadow : {
        "neon-pink" : ' 0 0 10px #e10361, 0 0 5px #e10361, 0 0 5px #e10361, 0 0 5px #e10361, 0 0 5px #e10361',
        "neon-blue" : '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00a3d5, 0 0 5px #00a3d5, 0 0 5px #00a3d5, 0 0 5px #00a3d5, 0 0 5px #00a3d5',
        "text-neon-hijau" :  '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa'
      },
      backgroundImage: {
        "image-interior" : "url('/src/assets/my_interior/Screenshot (73).png')"
      }
    },
    
    
  }
  ,
  plugins: [],
}

