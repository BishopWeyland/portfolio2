/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-white": "#F4F4F4",
        "brand-blue": "#3F6E6F",
        "brand-beige": "#E7E4E2",
        "brand-black": "#1F1F1F",
      },
      fontFamily: {
        allerta: ["Allerta", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
