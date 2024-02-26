/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textColor: "#252525",
      white: "#ffffff",
      grey: "#eee",
      mainColor: "#096FAD",
      hoverColor: "#439CDB",
      secondColor: "#69fab4",
    },
    extend: {
      fontFamily: {
        main: ["Jost", "sans-serif"],
        second: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
