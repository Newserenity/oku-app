/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  darkMode: "media", // class
  plugins: [require("@tailwindcss/forms")],
};
