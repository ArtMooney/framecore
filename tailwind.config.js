/** @type {import("tailwindcss").Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [],
  corePlugins: {
    preflight: true
  }
};
