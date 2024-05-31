/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Notosansdisplay", "sans-serif"],
        exo: ["Exo", "sans-serif"],
      },
      gridTemplateColumns: {
        thin: "3rem 1fr 3rem",
        slim: "0.25fr 1fr 0.25fr",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  mode: "jit",
};
