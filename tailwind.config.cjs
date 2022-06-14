module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontfamily : {
        'display': ['Oswald']
      },
      colors: {
        '2f-blue': {
          200: '#d9ebff',
          300: '#3b76a2',
          500: '#014670'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}