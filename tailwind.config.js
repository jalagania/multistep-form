/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "768px" },
        phone: { max: "480px" },
      },

      colors: {
        blueMarine: "hsl(213, 96%, 18%)",
        bluePurplish: "hsl(243, 100%, 62%)",
        bluePastel: "hsl(228, 100%, 84%)",
        blueLight: "hsl(206, 94%, 87%)",
        redStrawberry: "hsl(354, 84%, 57%)",
        grayCool: "hsl(231, 11%, 63%)",
        grayLight: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
    },
  },
  plugins: [],
};
