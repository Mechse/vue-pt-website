/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      display: ['Nunito', 'serif'],
      body: ['Roboto Slab', 'serif'],
    },
    extend: {
      colors: {
        'gblue': "#4F6272",
        'lblue': "#4DCCBD"
      },
      boxShadow: {
        blg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px #91F9E5'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
