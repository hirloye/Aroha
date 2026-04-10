import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // Relies purely on system preference
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // We override slate colors so that they automatically invert in dark mode, saving us from rewriting all the TSX files.
        slate: {
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
        },
        white: "var(--surface)",
        background: "var(--bg-color)", 
        primaryBrand: "#1E9096", 
        secondaryBrand: "#5E2B8A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        // Dynamic Neumorphic Shadows hooked to our CSS variables
        'neu': '10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light)',
        'neu-sm': '5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light)',
        'neu-hover': '15px 15px 30px var(--shadow-dark), -15px -15px 30px var(--shadow-light)',
        'neu-inset': 'inset 8px 8px 16px var(--shadow-dark), inset -8px -8px 16px var(--shadow-light)',
        // Glowing Accents
        'glow-teal': '0 0 15px rgba(30, 144, 150, 0.5)',
        'glow-purple': '0 0 15px rgba(94, 43, 138, 0.5)',
        'glow-chakra': '0 0 20px rgba(255, 165, 0, 0.3), 0 0 40px rgba(0, 128, 0, 0.3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
