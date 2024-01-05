export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:['class'],
  theme: {
    extend: {
      textColor: {
        default: '#1B85E7',
      },
      backgroundColor: {
        default: '#1B85E7',
        grayDark1: "#2F2F2F",
        grayDark2: "#414141",
        customBlack: "rgba(20, 20, 20, 1)",
      },
      boxShadow: {
        custom: '0px 0px 10px 0px rgba(255, 255, 255, 0.25)', // Custom box shadow
      },
      height:{
        'fill-available':"-webkit-fill-available",
        '90pt': '90%',
      },
      width: {
        '90pt': '90%',
        '80pt': '80%',
      },
    },
  },
  plugins: [],
}