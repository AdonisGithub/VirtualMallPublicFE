const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [  
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card": "rgb(148 166 195 / 10%) 0px 0px 24px"
      },
    },
    screens: {
      'xs': '375px',
      'xxl':'1920px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
