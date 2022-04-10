module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/index.html',
      './src/**/*.html',
      './src/**/*.vue',
      './src/styles/**/*.css',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    fontFamily: {
      Graphik: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#7F7F7F',
          light: '#CECED1',
          lightest: '#F3F3F3',
        },
        blue: {
          DEFAULT: '#376BF2',
          light: '#DBECFF',
        },
        purple: {
          DEFAULT: '#0C2878',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
