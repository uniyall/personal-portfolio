/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      mukta: ["Mukta", "sans-serif"],
      "NunitoSans" : ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
