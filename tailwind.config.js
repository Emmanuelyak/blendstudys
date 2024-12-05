/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'background-color': '#00A79E',
  			'border-color': '#00A79E',
  			color: '#00A79E',
  			main: '#fffff',
  			'sub-bg': '#e5f6f5',
  			},
  		fontFamily: {
  			inter: ["Inter", "tahoma"]
  		},
  		borderWidth: {
  			'custom-rt': '0px 2px 0px 0px',
  			'custom-left': '0px 0 0 2px'
  		},
  		borderColor: {
  			'custom-teal': '#00A79E'
  		},
  		height: {
  			'99': '420px',
  			'100': '460px',
  			'120': '51rem',
  			'ht-1': '200px',
			"ht-2": "230px",
  		},
  		width: {
  			'100': '95%',
  			'w-main': '97%',
  			'1/2': '20%',
  			"wh1": '200px'
  		},
  		fontSize: {
  			'2': '11px',
  			'4.5x': '42px'
  		},
  		backgroundImage: {
  			bg1: 'url("/pile-paperback-books-table.jpg")',
  			bg2: 'url("/container-88.png")',
  			backgroundOverlay: 'linear-gradient(#00A79E, transparent)'
  		},
  		backgroundColor: {
  			'sub-bg1': '#e5f6f5',
			"gc": "#06756f"

  		},
  		boxShadow: {
  			real: '5px 3px 20px rgb(176, 172, 172)'
  		},
		
  		left: {
			"50": "95%"
		}
      
  	}
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true }), require("tailwindcss-animate")],
  variants: {
    scrollbar: ["rounded"],
  },
};
