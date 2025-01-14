/** @type {import('tailwindcss').Config} */
import { theme } from './src/@core/theme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background,
        text: theme.colors.text,
      },
      spacing: {
        sm: theme.spacing.sm,
        md: theme.spacing.md,
        lg: theme.spacing.lg,
        xl: theme.spacing.xl,
      },
      borderRadius: {
        sm: theme.borderRadius.sm,
        md: theme.borderRadius.md,
        lg: theme.borderRadius.lg,
      },
    },
  },
  plugins: [],
}
