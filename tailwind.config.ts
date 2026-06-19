import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F5F1EC",
          dark: "#1A1A1A",
        },
        surface: {
          DEFAULT: "#ECE6DC",
          dark: "#242322",
        },
        "surface-raised": {
          DEFAULT: "#E3DBCC",
          dark: "#2E2C2A",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          dark: "#F5F1EC",
        },
        muted: {
          DEFAULT: "#6B6560",
          dark: "#B9B3AC",
        },
        gold: {
          DEFAULT: "#C1502E",
          dark: "#D9663F",
        },
      },
      fontFamily: {
        serif: ["Poppins", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 48s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
