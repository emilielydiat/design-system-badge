import { colorTokens, radiusTokens } from "./src/components/Badge/badge.tokens";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "badge-blue-background": colorTokens.blue[50],
        "badge-blue-border": colorTokens.blue[400],
        "badge-blue-text": colorTokens.blue[600],

        "badge-purple-background": colorTokens.purple[50],
        "badge-purple-border": colorTokens.purple[400],
        "badge-purple-text": colorTokens.purple[600],

        "badge-red-background": colorTokens.red[50],
        "badge-red-border": colorTokens.red[400],
        "badge-red-text": colorTokens.red[600],

        "badge-green-background": colorTokens.green[50],
        "badge-green-border": colorTokens.green[400],
        "badge-green-text": colorTokens.green[600],

        "badge-yellow-background": colorTokens.yellow[50],
        "badge-yellow-border": colorTokens.yellow[400],
        "badge-yellow-text": colorTokens.yellow[600],

        "badge-grey-background": colorTokens.grey[50],
        "badge-grey-border": colorTokens.grey[400],
        "badge-grey-text": colorTokens.grey[600],
      },
      borderRadius: {
        "badge-square": radiusTokens.square,
        "badge-circle": radiusTokens.circle,
        "badge-rounded": radiusTokens.rounded,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
