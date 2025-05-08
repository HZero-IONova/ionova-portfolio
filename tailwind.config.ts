import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-sans)",
      secondary: "var(--font-serif)",
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        dark: "#0B1520", // Fondo global, casi negro azulado
        primary: "#0B1520", // Igual que dark para consistencia
        orbitSurface: "#2b2b3e", // Paneles y cards: violeta muy oscuro
        tesla: "#32225F", // Secciones alternas: púrpura profundo
        accent: "#8EE4AF", // Menta: botones primarios, enlaces destacados
        magenta: "#FFC857", // Dorado/naranja: CTAs secundarios, badges
        light: "#EEF4FA", // Texto principal, títulos
        textMuted: "#A7ABAF", // Texto secundario, captions
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
