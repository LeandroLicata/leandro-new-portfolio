import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "graybg": "#5a5b60",
        "pink-neon": "#FF1493",
        "blue-neon": "#00A7E1",
        "bluebg": "#040a24",
        "pink": "#c92ec7",
        "blue": "#2440b7",
        "light-blue": "#0dd6fa"
      },
    },
  },
  plugins: [],
};
export default config;
