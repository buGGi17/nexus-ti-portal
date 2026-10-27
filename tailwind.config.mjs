/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          DEFAULT: '#0d111a',
          hover: '#131926',
          border: 'rgba(255, 255, 255, 0.08)'
        },
        lime: {
          accent: '#c8ff00',
          glow: 'rgba(200, 255, 0, 0.35)',
          muted: '#a3d900'
        },
        cyan: {
          accent: '#00f2fe',
          glow: 'rgba(0, 242, 254, 0.3)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam 6s linear infinite'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
}
