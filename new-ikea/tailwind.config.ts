import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  module.exports = {
    theme : {
      extend:{
        colors:{
          primary: "#FF0000",
          secondary: "#00FF00"
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
