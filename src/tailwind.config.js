// /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandRed: '#A81C07', // Warna merah tombol
        darkBg: '#08080A', // Warna latar gelap
      },
    },
  },
  plugins: [],
};
