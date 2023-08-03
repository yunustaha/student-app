/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'student': {
          'orange': '#FEAF00',
          'yellow': {
            'DEFAULT': '#F8D442',
            'light': '#FEFBEC',
            'dark': '#F6C762'
          },
          'border': '#E5E5E5',
          'beige': '#F2EAE1',
          'pink': {
            'DEFAULT': '#EE95C5',
            'light': '#FEF6FB'
          },
          'blue': {
            'DEFAULT': '#74C1ED',
            'light': '#F0F9FF'
          },
          'gray': {
            'DEFAULT': '#6C6C6C',
            'light': '#CDCDCD',
            'line': '#E5E5E5',
            'field': '#ACACAC',
            'grid': '#9FA2B4',
            'gridPage': '#4B506D',
            'background': '#F8F8F8'
          },
        },
      },
    },
  },
  plugins: [],
}
