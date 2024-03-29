module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        130: '33.125rem',
        100: '16rem',
      },
      height: {
        112: '560px',
        113: '95vh',
      },
      maxWidth: {
        124: '255px',
        123: '516px',
      },
      maxHeight: {
        125: '160px',
      },
    },
    fontFamily: {
      handwritten: ['Cabin'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
