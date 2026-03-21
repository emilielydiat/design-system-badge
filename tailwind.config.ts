import {
  badgeColorTokens,
  badgeRadiusTokens,
} from "./src/components/Badge/badge.tokens";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "badge-blue-background": badgeColorTokens.blue.background,
        "badge-blue-border": badgeColorTokens.blue.border,
        "badge-blue-text": badgeColorTokens.blue.text,

        "badge-purple-background": badgeColorTokens.purple.background,
        "badge-purple-border": badgeColorTokens.purple.border,
        "badge-purple-text": badgeColorTokens.purple.text,

        "badge-red-background": badgeColorTokens.red.background,
        "badge-red-border": badgeColorTokens.red.border,
        "badge-red-text": badgeColorTokens.red.text,

        "badge-green-background": badgeColorTokens.green.background,
        "badge-green-border": badgeColorTokens.green.border,
        "badge-green-text": badgeColorTokens.green.text,

        "badge-yellow-background": badgeColorTokens.yellow.background,
        "badge-yellow-border": badgeColorTokens.yellow.border,
        "badge-yellow-text": badgeColorTokens.yellow.text,

        "badge-grey-background": badgeColorTokens.grey.background,
        "badge-grey-border": badgeColorTokens.grey.border,
        "badge-grey-text": badgeColorTokens.grey.text,
      },
      borderRadius: {
        "badge-square": badgeRadiusTokens.square,
        "badge-circle": badgeRadiusTokens.circle,
        "badge-rounded": badgeRadiusTokens.rounded,
      },
    },
  },
  plugins: [],
} satisfies Config;
