module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      animation: {
        'move-line': 'move-line 20s linear infinite',
        'move-line-slow': 'move-line 30s linear infinite',
        'move-line-fast': 'move-line 10s linear infinite',
      },
      keyframes: {
        'move-line': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
