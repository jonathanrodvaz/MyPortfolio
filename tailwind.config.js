/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FDCC49',
        green: '#2b9955',
        grey: '#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
        'red': '#FF6B6B',
        'darkyellow': '#cdd1bd',
        'greyblue': '#afbcc0',
        
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
        'linear-gradient(#FF6B6B)',
        'gradient-rainblue':
        'linear-gradient(#FF6B6B)',
        'gradient-red':
        'linear-gradient(#FF6B6B)',
        'gradient-grey':
        'linear-gradient(#afbcc0)'
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      content: {
        
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};