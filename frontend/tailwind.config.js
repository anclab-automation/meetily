// Anclab Product System palettes (anclab-automation/anclab-design-kit, tokens/product.css).
// Tailwind's default gray/blue/red/green/amber/yellow/orange scales are replaced so the
// existing utility classes across the app resolve to Anclab neutrals, accent and status colours.
const anclabNeutral = {
  50: '#faf9f6', 100: '#f0eeea', 200: '#e6e3dc', 300: '#dad7d0', 400: '#a8a49b',
  500: '#85817a', 600: '#5f5b55', 700: '#403d39', 800: '#272729', 900: '#111014', 950: '#0b0a0d',
}
const anclabAccent = {
  50: '#eaf0ff', 100: '#dbe5ff', 200: '#bccfff', 300: '#93b0ff', 400: '#5f88ff',
  500: '#2563ff', 600: '#1d4ed8', 700: '#1a42b5', 800: '#183a91', 900: '#172f6e', 950: '#202f54',
}
const anclabDanger = {
  50: '#fdebe9', 100: '#fbd7d3', 200: '#f6b1aa', 300: '#ee8378', 400: '#e0533f',
  500: '#c8321f', 600: '#b42318', 700: '#941f16', 800: '#77190f', 900: '#5c140c', 950: '#422424',
}
const anclabSuccess = {
  50: '#e7f3ed', 100: '#cfe7db', 200: '#a3d4bd', 300: '#6fbb98', 400: '#3a9a74',
  500: '#1a8060', 600: '#116b4f', 700: '#0e5841', 800: '#0b4634', 900: '#083528', 950: '#17392c',
}
const anclabWarning = {
  50: '#fff8e8', 100: '#fff2d5', 200: '#ffe3a6', 300: '#ffd170', 400: '#ffc23b',
  500: '#e6a01a', 600: '#b87a00', 700: '#805100', 800: '#663f00', 900: '#4d2f00', 950: '#3b301d',
}
const anclabSignal = {
  50: '#fff0ec', 100: '#ffe0d8', 200: '#ffc0b1', 300: '#ff977f', 400: '#ff6f52',
  500: '#ff4b2b', 600: '#e84023', 700: '#c4331a', 800: '#9a2814', 900: '#731e0f', 950: '#4d140a',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-geist-sans)', 'Geist', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-geist-mono)', 'Geist Mono', 'ui-monospace', 'monospace']
  		},
  		// Anclab compact density: body and controls 13/20, supporting 12/16, section 16/24, title 24/32.
  		fontSize: {
  			xs: ['12px', '16px'],
  			sm: ['13px', '20px'],
  			base: ['14px', '22px'],
  			lg: ['16px', '24px'],
  			xl: ['20px', '28px'],
  			'2xl': ['24px', '32px']
  		},
  		colors: {
  			gray: anclabNeutral,
  			slate: anclabNeutral,
  			zinc: anclabNeutral,
  			neutral: anclabNeutral,
  			blue: anclabAccent,
  			indigo: anclabAccent,
  			sky: anclabAccent,
  			red: anclabDanger,
  			rose: anclabDanger,
  			green: anclabSuccess,
  			emerald: anclabSuccess,
  			yellow: anclabWarning,
  			amber: anclabWarning,
  			orange: anclabSignal,
  			signal: {
  				DEFAULT: 'hsl(var(--signal))',
  				foreground: 'hsl(var(--signal-foreground))',
  				hover: 'var(--anc-action-signal-hover)',
  				pressed: 'var(--anc-action-signal-pressed)'
  			},
  			paper: 'hsl(var(--paper))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: '#5f5b55',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		// Anclab: 4px control radius, 10px for large surfaces (cards, dialogs).
  		borderRadius: {
  			sm: '2px',
  			DEFAULT: 'var(--radius)',
  			md: 'var(--radius)',
  			lg: 'var(--radius)',
  			xl: '10px',
  			'2xl': '10px'
  		},
  		boxShadow: {
  			sm: 'var(--anc-shadow-raised)',
  			DEFAULT: 'var(--anc-shadow-raised)',
  			md: 'var(--anc-shadow-raised)',
  			lg: 'var(--anc-shadow-overlay)',
  			xl: 'var(--anc-shadow-overlay)',
  			'2xl': 'var(--anc-shadow-overlay)'
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
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}