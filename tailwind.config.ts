import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      colors: {
        additive: {
          blue: {
            DEFAULT: "#00172F",
            light: "#002A4A",
            dark: "#000F1D",
          },
          white: {
            DEFAULT: "#FFFFFF",
          },
          gray: {
            DEFAULT: "#F4F5F6",
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
