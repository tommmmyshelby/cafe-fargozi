import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // THIS LINE IS THE MOST IMPORTANT
  ],
  theme: {
    extend: {
      colors: {
        fargozi: {
          red: "#C41E24",
          gold: "#EBA83A",
          black: "#0A0A0A",
          white: "#F5F5F5",
          muted: "#8A8A8A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;