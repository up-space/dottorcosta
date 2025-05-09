import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  	extend: {
      colors: {
        'blu-notte': 'hsl(var(--blu-notte))',
        'grigio-scuro': 'hsl(var(--grigio-scuro))',
        'grigio-chiaro': 'hsl(var(--grigio-chiaro))',
        'bianco-perla': 'hsl(var(--bianco-perla))',
        'blu-polvere': 'hsl(var(--blu-polvere))',
        'rosa-polvere': 'hsl(var(--rosa-polvere))',
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
  			}
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
  			gradient: {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				},
  			},
  			"slide-in-from-top-5": {
  				"0%": { transform: "translateY(-5%)", opacity: "0" },
  				"100%": { transform: "translateY(0)", opacity: "1" },
  			},
  			shine: {
  				"0%": { backgroundPosition: "200% center" },
  				"100%": { backgroundPosition: "-200% center" },
  			},
  			"fade-up": {
  				"0%": { opacity: "0", transform: "translateY(20px)" },
  				"100%": { opacity: "1", transform: "translateY(0)" },
  			},
  			"fade-down": {
  				"0%": { opacity: "0", transform: "translateY(-20px)" },
  				"100%": { opacity: "1", transform: "translateY(0)" },
  			},
  			"fade-in": {
  				"0%": { opacity: "0" },
  				"100%": { opacity: "1" },
  			},
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			gradient: 'gradient 8s ease infinite',
  			"slide-in-from-top-5": "slide-in-from-top-5 0.3s ease-out",
  			shine: "shine 8s ease-in-out infinite",
  			"fade-up": "fade-up 0.5s ease-out forwards",
  			"fade-down": "fade-down 0.5s ease-out forwards",
  			"fade-in": "fade-in 0.5s ease-out forwards",
  		},
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} satisfies Config;
