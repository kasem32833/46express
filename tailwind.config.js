/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        sidebarbg: '#121418',
        lightgreen: '#20C997',
        
        borderbg: '#343A40',
        bgoverlay:'#414346',
        maindarkbg: '#212529',
        mainlightbg: '#',
        textcolor: '#919294',
        lightgray:'#DEE3E4',
        secondary:'#343A40',
        textsecondary:'#3E4448',
      },

    },
  },
  plugins: [],
}
