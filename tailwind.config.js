/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors');

// Colors backed by CSS variables (defined in assets/css/tailwind.css) so that
// existing utility classes switch automatically when <html> has the `dark` class.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

const primaryHex = {
  50: '#eef3fb',
  100: '#d6e2f6',
  200: '#aec5ec',
  300: '#7d9fdd',
  400: '#4a72cb',
  500: '#2754b9',
  600: '#1C48A8',
  700: '#173a87',
  800: '#142f6b',
  900: '#122749',
};

// Slate is inverted in dark mode (50 = page background, 900 = strongest text).
const slate = Object.fromEntries(
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((s) => [s, v(`slate-${s}`)])
);

// Light primary shades used as backgrounds/borders become dark blue tints in
// dark mode. The deep shades (400-900) stay fixed so blue buttons and bands
// (bg-primary-600 + text-white, bg-primary-900 CTA) look the same in both themes.
const primarySurface = {
  ...primaryHex,
  50: v('p-bg-50'),
  100: v('p-bg-100'),
  200: v('p-bg-200'),
  300: v('p-bg-300'),
};

// Primary used as text: the deep shades lighten in dark mode for contrast. The
// light shades (50-300) stay fixed because they are only used as text on blue.
const primaryText = {
  ...primaryHex,
  400: v('p-tx-400'),
  500: v('p-tx-500'),
  600: v('p-tx-600'),
  700: v('p-tx-700'),
  800: v('p-tx-800'),
  900: v('p-tx-900'),
};

const accentHex = { 50: '#fff7ed', 100: '#ffedd5', 500: '#f97316', 600: '#ea580c' };
const accentSurface = { ...accentHex, 50: v('a-bg-50'), 100: v('a-bg-100') };

const surfaceColors = { primary: primarySurface, accent: accentSurface };

module.exports = {
  // Screen only, matching the CSS variables in tailwind.css: printing always
  // uses the light styles, including dark:prose-invert and other dark: utilities.
  darkMode: ['variant', '@media screen { &:is(.dark *) }'],
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./exampleSite/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        slate,
        // Fixed (non-inverting) slate for surfaces that are dark in both
        // themes: footer, modal overlays, code blocks, shadows.
        ink: defaultColors.slate,
        // Card / panel background: white in light mode, dark slate in dark mode.
        surface: v('surface'),
        // Pop-ups (search, subscribe, mobile menu): one step lighter than cards in
        // dark mode, since shadows don't read on dark backgrounds.
        'surface-raised': v('surface-raised'),
        primary: primaryHex,
        accent: accentHex,
      },
      backgroundColor: surfaceColors,
      gradientColorStops: surfaceColors,
      borderColor: surfaceColors,
      ringColor: surfaceColors,
      divideColor: surfaceColors,
      outlineColor: surfaceColors,
      textColor: { primary: primaryText },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
