/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "**.html",
      "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#0E4FA9",
            secondary: "#DCE5F6",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            noto: ["Noto Sans", "sans-serif"],
        },
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

