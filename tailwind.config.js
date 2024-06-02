/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'fhd': '1900px',
        'qhd': '2500px'
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}

