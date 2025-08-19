/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        primary: 'var(--font-primary--family)',
      },
      maxWidth: {
        page: 'var(--page-width)',
      },
      spacing: {
        'page-margin': 'var(--page-margin)',
      },
      borderRadius: {
        'input': 'var(--style-border-radius-inputs)',
      },
    },
  },
  plugins: [],
}
