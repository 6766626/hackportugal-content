/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/index.html', './client/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a1a',
        cream: '#fdf6e3',
      },
    },
  },
  plugins: [],
}
