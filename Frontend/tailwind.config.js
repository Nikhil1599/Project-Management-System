export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3F0FB7",
        redColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBueColor: "#01B5C%",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17,12 ,46,0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};