/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9500",
      },
      fontFamily: {
        afacad: ["Afacad", "serif"],
        "open-sans": ["Open Sans", "serif"],
        inter: ["Inter", "serif"],
        roboto: ["Roboto", "serif"]
      },
    },
  },
  plugins: [],
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false,
    borderOpacity: false,
  },
};
