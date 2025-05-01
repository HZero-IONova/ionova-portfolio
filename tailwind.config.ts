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
        light: "#b19f9e",
        primary: "#19181a",
        accent: "#479761",
        tesla: "#a16e83",
        magenta: "#cebc81",
        dark: "#19181a",
        card: "#232334",
      },
    },
  },
  plugins: [],
};
export default config;
