/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgText-programs': "url('/bgText-programs.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    container: {
      padding: '2rem',
      margin:"0rem"
    },
  },
  plugins: [],
}