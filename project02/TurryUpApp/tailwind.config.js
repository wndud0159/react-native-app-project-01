module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF490F',
        light: '#FF650F',
        dark: '#2B2B2B',
        line: '#E9EBEE',
        background: 'F0F0F0',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
