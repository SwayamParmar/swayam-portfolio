/** @type {import('tailwindcss').Config} */

/**
 * Design system for the Aman Yadav portfolio.
 *
 * Theme colours are driven by CSS custom properties (defined in src/index.css)
 * so switching between light and dark mode can be *animated* with a CSS
 * transition instead of snapping instantly. Each variable holds a space
 * separated RGB triplet so Tailwind's `<alpha-value>` opacity modifiers
 * (e.g. `bg-card/60`) keep working.
 */
const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        /* ---- Brand ramp: teal (primary, 30%) ---- */
        brand: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          DEFAULT: '#14B8A6',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          DEFAULT: '#10B981',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          DEFAULT: '#F59E0B',
        },

        /* Semantic brand aliases (theme aware) */
        primary: withOpacity('--color-primary'),
        secondary: withOpacity('--color-secondary'),
        accent: withOpacity('--color-accent'),

        /* ---- Theme aware surfaces ---- */
        canvas: withOpacity('--color-bg'),
        'canvas-alt': withOpacity('--color-bg-alt'),
        card: withOpacity('--color-card'),
        'card-alt': withOpacity('--color-card-alt'),
        elevated: withOpacity('--color-elevated'),

        /* ---- Theme aware content ---- */
        content: {
          DEFAULT: withOpacity('--color-text'),
          strong: withOpacity('--color-text-strong'),
          muted: withOpacity('--color-text-muted'),
          subtle: withOpacity('--color-text-subtle'),
          inverted: withOpacity('--color-text-inverted'),
        },

        /* ---- Theme aware lines ---- */
        line: {
          DEFAULT: withOpacity('--color-border'),
          strong: withOpacity('--color-border-strong'),
          soft: withOpacity('--color-border-soft'),
        },
      },

      fontFamily: {
        display: ['Satoshi', 'General Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['4.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
      },

      letterSpacing: {
        tighter: '-0.035em',
        label: '0.14em',
      },

      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        soft: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.12)',
        card: '0 2px 6px rgb(15 23 42 / 0.04), 0 18px 40px -24px rgb(15 23 42 / 0.25)',
        lifted: '0 8px 20px -8px rgb(15 23 42 / 0.16), 0 32px 64px -32px rgb(15 23 42 / 0.35)',
        glow: '0 0 0 1px rgb(20 184 166 / 0.18), 0 12px 40px -12px rgb(20 184 166 / 0.45)',
        'glow-sm': '0 6px 20px -8px rgb(20 184 166 / 0.5)',
        'glow-amber': '0 12px 40px -14px rgb(245 158 11 / 0.55)',
        'inner-line': 'inset 0 1px 0 0 rgb(255 255 255 / 0.06)',
      },

      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #0D9488 0%, #059669 45%, #10B981 100%)',
        'brand-gradient-soft':
          'linear-gradient(120deg, rgb(20 184 166 / 0.16), rgb(16 185 129 / 0.14) 55%, rgb(20 184 166 / 0.16))',
        'brand-sheen': 'linear-gradient(110deg, transparent 20%, rgb(255 255 255 / 0.35) 50%, transparent 80%)',
        'grid-light':
          'linear-gradient(to right, rgb(15 23 42 / 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.055) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgb(148 163 184 / 0.09) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.09) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at center, rgb(20 184 166 / 0.22), transparent 65%)',
      },

      backgroundSize: {
        grid: '56px 56px',
        'grid-sm': '32px 32px',
        shimmer: '200% 100%',
        'gradient-pan': '200% 200%',
      },

      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
        700: '700ms',
      },

      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -7px, 0)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -5px, 0)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '-50% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        'wave-scroll': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'blob-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(1.5%, -2%, 0) scale(1.03)' },
          '66%': { transform: 'translate3d(-1.5%, 1.5%, 0) scale(0.98)' },
        },
        'caret-blink': {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'marquee-x': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
      },

      animation: {
        'float-slow': 'float-slow 9s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'float-soft': 'float-soft 8s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'gradient-pan': 'gradient-pan 9s ease infinite',
        shimmer: 'shimmer 2.6s linear infinite',
        'pulse-glow': 'pulse-glow 9s ease-in-out infinite',
        'wave-slow': 'wave-scroll 26s linear infinite',
        'wave-mid': 'wave-scroll 18s linear infinite',
        'wave-fast': 'wave-scroll 12s linear infinite',
        'blob-drift': 'blob-drift 30s ease-in-out infinite',
        'caret-blink': 'caret-blink 1.1s step-end infinite',
        'scroll-hint': 'scroll-hint 1.9s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'marquee-x': 'marquee-x 32s linear infinite',
      },

      zIndex: {
        nav: '60',
        overlay: '70',
        toast: '80',
        modal: '90',
      },
    },
  },
  plugins: [],
};
