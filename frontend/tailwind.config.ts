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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-dark": "rgb(52, 57, 77)",
        "primary-blue": "rgb(1, 0, 72)",
        "accent-amber": "rgb(236, 158, 5)",
        "accent-orange": "rgb(248, 172, 8)",
      },
      fontFamily: {
        metropolis: ["var(--font-metropolis)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        "libre-franklin": ["var(--font-libre-franklin)", "sans-serif"],
        wang: ["var(--font-wang)", "cursive", "sans-serif"],
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
