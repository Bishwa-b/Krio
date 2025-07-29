
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				krio: {
					"blue": "#f2C37F",
					"green": "#E5E8D3",
					"yellow": "#F8E0B7",
					"purple": "#6A1B9A",
					"dark": "#0F0F0F",
					"light": "#FFFFFF",
					"orange": "#923A1F",
					"pink": "#EC407A",
					"lime": "#CDDC39",
					"teal": "#26A69A",
					"chalk": "#F4EFCA",
					"main": "#22479C",


				}
			},
			fontFamily: {
				'poppins': ['Poppins'],
				
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(-20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				"fade-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(20px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				"bounce": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-15px)"
					}
				},
				"pulse-color": {
					"0%, 100%": {
						backgroundColor: "rgba(139, 195, 74, 0.3)"
					},
					"50%": {
						backgroundColor: "rgba(139, 195, 74, 0.7)"
					}
				},
				"marquee": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},

				"zoomPulse": {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.2)' },
				  },
				  "pulseText": {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				  },
				
				
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-left": "fade-in-left 0.5s ease-out forwards",
				"fade-in-right": "fade-in-right 0.5s ease-out forwards",
				"bounce": "bounce 2s ease-in-out infinite",
				"float": "float 3s ease-in-out infinite",
				"pulse-color": "pulse-color 2s ease-in-out infinite",
				"marquee": "marquee 60s linear infinite",
				"zoomPulse": 'zoomPulse 2s ease-in-out infinite',
  				"pulseText": 'pulseText 2s ease-in-out infinite',
			},
			backgroundImage: {
				"gradient-fun": "linear-gradient(to right, #FF7043, #EC407A, #8BC34A, #26A69A)",
				"gradient-energy": "radial-gradient(circle, #FEF9C3, #8BC34A, #2E5BD6)",
				"pattern-dots": "radial-gradient(#8BC34A 2px, transparent 2px)",
				"confetti": "url('/lovable-uploads/confetti-background.png')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
