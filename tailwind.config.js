/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{'xxs': {'max': '620px'},
             'lg': {'min':'1024px'},
             'sm': {'min':'640px'},
             'md': {'min' :'768px'},
             'xl': {'min':'1280px'},
             '2xl': {'min' :'1536px'}},
    extend: {
      backgroundImage: {
        'backgroundSVG': "url('/src/assets/images/header.svg')",
        'backgroundSVGResponsive': "url('/src/assets/images/responsiveLogin.svg')",
        'backgroundSVGResponsiveTablet': "url('/src/assets/images/LoginSVGTablet.svg')"
      }
    },
  },
  plugins: [],
}

