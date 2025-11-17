import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-achilles-blue",
    "bg-achilles-blue-light",
    "bg-achilles-blue-lighter",
    "bg-achilles-blue-dark",
    "text-achilles-blue",
    "text-achilles-blue-light",
    "border-achilles-blue",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
        // Custom brand colors - Achilles Blue Theme
        "achilles-blue": {
          DEFAULT: "#0F4C75", // Deep teal/blue primary
          light: "#3282B8", // Lighter blue
          lighter: "#BBE1FA", // Light blue for accents
          dark: "#0A3A5C", // Darker blue
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "5rem", // 80px
        "section-lg": "8rem", // 128px
      },
      boxShadow: {
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "glow": "0 0 20px rgba(15, 76, 117, 0.3)",
        "glow-lg": "0 0 40px rgba(15, 76, 117, 0.4)",
      },
      backgroundImage: {
        "gradient-achilles": "linear-gradient(to right, #0F4C75, #3282B8, #BBE1FA)",
        "gradient-achilles-soft": "linear-gradient(to bottom right, rgba(15, 76, 117, 0.05), rgba(50, 130, 184, 0.05), rgba(187, 225, 250, 0.1))",
        "gradient-achilles-hero": "linear-gradient(135deg, rgba(15, 76, 117, 0.1) 0%, rgba(50, 130, 184, 0.05) 50%, rgba(187, 225, 250, 0.15) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

