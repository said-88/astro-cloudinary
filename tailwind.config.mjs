/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        halloween: {
          orange: "#FF6600",
          purple: "#660066",
          green: "#00FF00",
          black: "#000000",
          red: "#FF0000",
        },
      },
      fontFamily: {
        spooky: ["Creepster", "sans-serif"],
      },
    },
  },
  plugins: [],
};
