import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef3ec",
          100: "#fde4d0",
          500: "#f97316",
          600: "#ea6c0a",
          700: "#c2570b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
