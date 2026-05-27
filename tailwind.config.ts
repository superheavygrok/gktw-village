import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium soft pastel + storybook magic palette for $VILLAGE
        cream: "#FDFAF7",
        surface: "#FFFFFF",
        rose: "#F8C9D4",
        lavender: "#EDE4F7",
        mint: "#D8E9D3",
        sky: "#D6EAF8",
        gold: "#E8C78B",
        text: "#2C2638",
        "text-muted": "#5F566E",
        // Subtle village-inspired accents (used sparingly)
        villageOrange: "#E07A4D",
        villageBlue: "#5B8FA8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgb(0 0 0 / 0.06), 0 2px 8px -2px rgb(0 0 0 / 0.04)",
        gentle: "0 10px 30px -10px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
