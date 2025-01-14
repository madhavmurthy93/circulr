import scrollbarPlugin from "tailwind-scrollbar";
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
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [scrollbarPlugin],
} satisfies Config;
