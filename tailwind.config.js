const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        inter: ['Inter'],
        petitformal:['Petit Formal Script'],
        russoOne: ['Russo One'],
        
      },
      colors: {
        royalBlue: "#4169e1",
        darkBlue: "#0d1117",
        dark: "#0d1117",
      }
    },
  },
  plugins: [],
});





  