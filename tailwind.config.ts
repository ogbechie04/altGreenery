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
        roboto: "Roboto, sans-serif",
        arimo: "Arimo, sans-serif",
        fraunces: "Fraunces, serif",
      },
      boxShadow: {
        "button-shadow": "0px 0px 10px 0px #F7C814",
      },
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": `var(--primary-200)`,
        "primary-300": `var(--primary-300)`,
        "primary-400": `var(--primary-400)`,
        "primary-600": `var(--primary-600)`,
        "primary-800": `var(--primary-800)`,
        "primary-1000": `var(--primary-1000)`,
        "secondary-100": `var(--secondary-100)`,
        "secondary-500": "var(--secondary-500)",
        "neutral-100": "var(--neutral-100)",
        "neutral-500": "var(--neutral-500)",
        "neutral-1100": "var(--neutral-1100)",
        "neutral-1900": "var(--neutral-1900)",
        "neutral-2000": "var(--neutral-2000)",
      },
    },
  },
  plugins: [],
};
export default config;
