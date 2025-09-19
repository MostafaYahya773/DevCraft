/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D3F900',   // الأصفر/الأخضر الفسفوري بتاع اللوجو
        dark: '#000000',      // الخلفيات السوداء
        grayLight: '#9CA3AF', // رمادي فاتح (مثلاً للتيكست)
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
