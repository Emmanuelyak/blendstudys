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
  			inactive: '#f7e6e6',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'tahoma'
  			]
  		},
  		borderWidth: {
  			'custom-rt': '0px 2px 0px 0px',
  			'custom-left': '0px 0 0 2px'
  		},
  		borderColor: {
  			'custom-teal': '#00A79E',
  			'custom-2': '#ffc87b'
  		},
  		height: {
  			'99': '420px',
  			'100': '460px',
  			'120': '51rem',
  			'ht-1': '200px',
  			'ht-2': '230px',
  			'ht-3': '580px'
  		},
  		width: {
  			'100': '95%',
  			'w-main': '97%',
  			'1/2': '20%',
  			wh1: '200px'
  		},
  		fontSize: {
  			'2': '11px',
  			'3': '14px',
  			'1.1': '10px',
  			'4.5x': '42px'
  		},
  		backgroundImage: {
  			bg1: 'url("/pile-paperback-books-table.jpg")',
  			bg2: 'url("/container-88.png")',
  			backgroundOverlay: 'linear-gradient(#00A79E, transparent)'
  		},
  		backgroundColor: {
  			'sub-bg1': '#e5f6f5',
  			gc: '#06756f',
  			'sub-bg-2': '#fff5e7'
  		},
  		boxShadow: {
  			real: '5px 3px 20px rgb(176, 172, 172)'
  		},
  		left: {
  			'50': '95%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true }), require("tailwindcss-animate")],
  variants: {
    scrollbar: ["rounded"],
  },
};
