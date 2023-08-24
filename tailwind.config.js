/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors:{
        sideBarBorderBlue : "#84D8FF",
        sideBarBlue : "#DDF4FF",
        gray:"#777777",
        superBlue : "#3C4DFF",
        borderGray:"#E5E5E5",
        XpBlue : "#1CB0F6",
        darkBlue :"#000437",
        greenUnit : "#58CC02",
        indigoUnit : "#CE82FF",
        coolBlueUnit : "#00CD9C",
        streaksOrange :"#FF9600"
      },
      dropShadow: {
        '4xl': '0px 2px 0px 0px rgba(0, 0, 0, 0.20)'

      }
    },
  },
  plugins: [],
}

