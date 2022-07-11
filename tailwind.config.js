module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        gray : {
          400 : '#969798',
          500 : '#666666',
          700 : '#353535',
          800 : '#262626',
          900 : '#171818',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
