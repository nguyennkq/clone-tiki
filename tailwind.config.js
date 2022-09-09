module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gray-1':'#808089',
        'button':'#0D5CB6',
        'gray-2':'rgb(235, 235, 240)',
        'main':'rgb(245, 245, 250)',
        'main-text':'#242424',
        'main-bg':'rgb(255, 255, 255)',
        'price':'rgb(238, 238, 238)',
        'detail':'#F2F0FE',
        'detail-sp':'rgb(64, 45, 161)',
        'detail-bd':'rgb(198, 188, 248)',
        'detail-bd-gd':'#0D5CB6'
      },
      fontFamily: {
        'web':'Roboto,Helvetica,Arial,sans-serif'
      },
      screens:{
        's':'320px'
      },
      boxShadow:{
        'shadow-content':'0 0 6px 0 rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}