/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'color-primary': '#B88E2F',
        'color-primary-light': '#FFF3E3',
        'dark-grey': '#333333',
        'dark-grey-2': '#3A3A3A',
        'semi-dark-grey': '#666666',
        'semi-dark-grey-2': '#898989',
        'semi-dark-grey-3': '#616161',
        'light-grey': '#B0B0B0'
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}

