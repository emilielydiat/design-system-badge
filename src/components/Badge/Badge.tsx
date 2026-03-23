import type { BadgeColor, BadgeRadius } from "./badge.tokens";
import type { ReactNode } from "react";

export interface BadgeProps {
  label: string;
  color?: BadgeColor;
  radius?: BadgeRadius;
  outlined?: boolean;
  filled?: boolean;
  icon?: ReactNode;
  className?: string;
}

const badgeColorClassMap: Record<
  BadgeColor,
  {
    background: string;
    border: string;
    text: string;
  }
> = {
  blue: {
    background: "bg-badge-blue-background",
    border: "border-badge-blue-border",
    text: "text-badge-blue-text",
  },
  purple: {
    background: "bg-badge-purple-background",
    border: "border-badge-purple-border",
    text: "text-badge-purple-text",
  },
  red: {
    background: "bg-badge-red-background",
    border: "border-badge-red-border",
    text: "text-badge-red-text",
  },
  green: {
    background: "bg-badge-green-background",
    border: "border-badge-green-border",
    text: "text-badge-green-text",
  },
  yellow: {
    background: "bg-badge-yellow-background",
    border: "border-badge-yellow-border",
    text: "text-badge-yellow-text",
  },
  grey: {
    background: "bg-badge-grey-background",
    border: "border-badge-grey-border",
    text: "text-badge-grey-text",
  },
};

const badgeRadiusClassMap: Record<BadgeRadius, string> = {
  square: "rounded-badge-square",
  circle: "rounded-badge-circle",
  rounded: "rounded-badge-rounded",
};

export function Badge({
  label,
  color = "blue",
  radius = "square",
  outlined = true,
  filled = true,
  icon,
  className = "",
}: BadgeProps) {
  const colorClasses = badgeColorClassMap[color];
  const radiusClass = badgeRadiusClassMap[radius];

  const backgroundClass = filled ? colorClasses.background : "bg-transparent";
  const borderClass = outlined
    ? `border ${colorClasses.border}`
    : "border border-transparent";

  return (
    <span
      data-testid="badge"
      className={[
        "inline-flex items-center justify-center whitespace-nowrap gap-1 px-2 py-1",
        "text-sm leading-5 font-normal tracking-[-0.02em]",
        colorClasses.text,
        radiusClass,
        backgroundClass,
        borderClass,
        className,
      ].join(" ")}
    >
      {icon ? (
        <span
          className="inline-flex items-center justify-center h-4 w-4"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <span>{label}</span>
    </span>
  );
}
