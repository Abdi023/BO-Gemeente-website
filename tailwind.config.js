/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.pug"],
  theme: {
    extend: {
      height: {
        "slider": "40rem",
      },
    },
  },
  plugins: [],
}