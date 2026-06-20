/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./exampleSite/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef3fb',
          100: '#d6e2f6',
          200: '#aec5ec',
          300: '#7d9fdd',
          400: '#4a72cb',
          500: '#2754b9',
          600: '#1C48A8',
          700: '#173a87',
          800: '#142f6b',
          900: '#122749',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
