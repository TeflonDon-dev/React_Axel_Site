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
      },
        backgroundImage: {
      wrapperBg: "url('assets/images/wrapperBackground.svg')",
      wrapperDark: "url('assets/images/wrapperDark.svg')",
    },
       container: {
      screens: {
        sm: "640px",
        md: "767px",
        lg: "1140px",
        xl: "1400px",
        "2xl": "1800px",
      },
    },
    },
  },
  plugins: [],
});





  