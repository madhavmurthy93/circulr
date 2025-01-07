import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f8ec",
          100: "#d1ebc6",
          200: "#b2dea0",
          300: "#93d17a",
          400: "#74c454",
          500: "#5bab3b",
          600: "#47852e",
          700: "#325f21",
          800: "#1e3914",
          900: "#0a1307",
        },
        accent: {
          50: "#fcf2e8",
          100: "#f6d7bb",
          200: "#f1bd8e",
          300: "#eba361",
          400: "#e58833",
          500: "#cc6f1a",
          600: "#9e5614",
          700: "#713d0e",
          800: "#442509",
          900: "#170c03",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
