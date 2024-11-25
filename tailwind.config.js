/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-color": "#00A79E",
        "border-color": "#00A79E",
        "color": "#00A79E",
        "main" : "#fffff",
        "sub-bg": "#e5f6f5"
      },
      borderWidth: {
        'custom-left': '0px 0 0 2px' // This creates border only on the left side
      },
      borderColor: {
        'custom-teal': '#00A79E'
      },
      height: {
        "120" : "51rem"
      },
      width: {
        "100" : "95%",
        "w-main" : "97%"
      },
      fontSize : {
        "4.5x" : "42px"
      },
      backgroundImage : {
          "bg1" : "url('/pile-paperback-books-table.jpg')",
          "backgroundOverlay" : "linear-gradient(#00A79E, transparent)"
          // "bg2" : "istockphoto-1605124960-612x612 1.png",
          // "bg3": "pexels-photo-8062289 1.png",
          // "bg4" :"istockphoto-507400394-612x612 1.png"
      },
      backgroundColor: {
        "sub-bg1": "#e5f6f5"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded']
  }
};
