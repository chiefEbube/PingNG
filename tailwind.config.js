/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'inter': 'inter'
    },
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        'light-blue': 'rgb(232,237,237)'
      },
    },
  },
  plugins: [],
}

