import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-banner': "url('/assets/images/bg/home/banner.webp')",
        'home-product': "url('/assets/images/bg/home/home-product-bg.webp')",
        'home-news': "url('/assets/images/bg/home/latest-news-bg.webp')",
        'getInTouch': "url('/assets/images/bg/get-in-touch/get-in-touch-bg.webp')",
        'shill-banner': "url('/assets/images/bg/shill/shill-bg.webp')",
      },
      colors: {
        'ps-green': '#57FFC6'
      }
    },
  },
  plugins: [],
}
export default config
