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
        'semi-dark-grey': '#666666'
      },
    },
  },
  plugins: [],
}

