/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Purple: "hsl(259, 100%, 65%)",
        Lightred: "hsl(0, 100%, 67%)",
      },
      fontFamily: {
        Poppins: ["'Poppins' ,sans-serif"],
      },
    },
  },
  plugins: [],
};
