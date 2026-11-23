/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-canvas': '#F4F2FA',
        'bg-white': '#FFFFFF',
        'ink-carbon': '#111018',
        'ink-slate': '#464354',
        'ink-light': '#F7F5FC',
        'ink-light-muted': '#C4C0D4',
        'brand-purple': '#6D28D9',
        'brand-lavender': '#C4B5FD',
        'brand-plum': '#3B1578',
        'poster-lime': '#DDF542',
        'poster-peach': '#F6D0B1',
        'poster-sky': '#93C5FD',
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'floating-nav': '0 14px 36px -14px rgba(17, 16, 24, 0.16)',
        'editorial-card': '0 22px 50px -24px rgba(17, 16, 24, 0.18)',
        'poster-stage': '0 32px 72px -24px rgba(17, 16, 24, 0.48)',
      },
    },
  },
  plugins: [],
};
