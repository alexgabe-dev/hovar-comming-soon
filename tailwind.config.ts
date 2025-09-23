import type { Config } from "tailwindcss"

const config: Config = {
  // dark mode - class-based
  darkMode: ["class"],
  // content paths - where to look for classes
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "", // no prefix needed
  theme: {
    // container config - centered with padding
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px", // max width
      },
    },
    extend: {
      // custom font stack - monospace for code feel
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "SF Mono", "Consolas", "Liberation Mono", "Menlo", "monospace"],
      },
      // color system - CSS variables for theming
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // secondary colors
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // destructive/error colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // muted/subtle colors
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // accent colors
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // popover colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // card colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // border radius - CSS variable based
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // custom keyframes - animations
      keyframes: {
        // accordion animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // custom pulse animations - status indicators
        "pulse-red": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.7)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 8px 2px rgba(239, 68, 68, 0.5)",
            transform: "scale(1.05)"
          },
        },
        "pulse-yellow": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(234, 179, 8, 0.7)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 8px 2px rgba(234, 179, 8, 0.5)",
            transform: "scale(1.05)"
          },
        },
        "pulse-gray": {
          "0%, 100%": { 
            boxShadow: "0 0 0 0 rgba(107, 114, 128, 0.7)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 8px 2px rgba(107, 114, 128, 0.5)",
            transform: "scale(1.05)"
          },
        },
      },
      // animation definitions - timing and easing
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-red": "pulse-red 2s ease-in-out infinite",
        "pulse-yellow": "pulse-yellow 2s ease-in-out infinite",
        "pulse-gray": "pulse-gray 2s ease-in-out infinite",
      },
    },
  },
  // plugins - animation utilities
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
