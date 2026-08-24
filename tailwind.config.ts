import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        /**
         * Brand-tinted neutral ramp — overrides Tailwind's default cool-grey
         * `slate` scale used site-wide. Each step keeps the SAME relative
         * lightness as the default it replaces (so every existing `slate-*`
         * class keeps its contrast and layout), but the hue is pulled toward
         * the brand navy (#0E1A2E ≈ 900) for a warm, on-brand neutral instead
         * of generic grey. Single source of truth for the "remove grey" change.
         */
        slate: {
          50: '#F6F8FB',
          100: '#EEF3F9',
          200: '#DFE7F1',
          300: '#C4D0E0',
          400: '#8D9CB3',
          500: '#5D6B85',
          600: '#43506B',
          700: '#2C3A54',
          800: '#1A2740',
          900: '#101E36',
          950: '#0A1120',
        },
        navy: {
          DEFAULT: '#0E1A2E',
          light: '#162844',
          dark: '#09111F',
        },
        teal: {
          DEFAULT: '#0F766E',
          light: '#149188',
          dark: '#0B5650',
        },
        softBlue: {
          DEFAULT: '#D1E2F8',
          light: '#E2EDFC',
          dark: '#B0CEF3',
        },
        offWhite: {
          DEFAULT: '#FAFBFC',
          light: '#FFFFFF',
          dark: '#F1F5F9',
        },
        electric: {
          DEFAULT: '#0F766E',
          light: '#149188',
          dark: '#0B5650',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-right': 'slideRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
