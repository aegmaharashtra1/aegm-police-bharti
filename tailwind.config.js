/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'aeg-orange':      '#E8490F',
        'aeg-orange-dark': '#C43C0A',
        'aeg-dark':        '#0F0F0F',
        'aeg-navy':        '#0D1B3E',
        'aeg-navy-light':  '#162850',
        'aeg-grey':        '#F4F6F9',
        'aeg-muted':       '#6B7280',
        'aeg-border':      '#E5E7EB',
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
