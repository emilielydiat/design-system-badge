export const colorTokens = {
  blue: {
    50: "#EFF6FF",
    400: "#60A5FA",
    600: "#2563EB",
  },
  purple: {
    50: "#FAF5FF",
    400: "#C084FC",
    600: "#9333EA",
  },
  red: {
    50: "#FEF2F2",
    400: "#F06A6C",
    600: "#DC2626",
  },
  green: {
    50: "#F0FDF4",
    400: "#4ADE80",
    600: "#16A34A",
  },
  yellow: {
    50: "#FEFCE8",
    400: "#FACC15",
    600: "#CA8A04",
  },
  grey: {
    50: "#F9FAFB",
    400: "#9CA3AF",
    600: "#4B5563",
  },
} as const;

export const radiusTokens = {
  square: "0px",
  circle: "100px",
  rounded: "6px",
} as const;

export type BadgeColor = keyof typeof colorTokens;
export type BadgeRadius = keyof typeof radiusTokens;
