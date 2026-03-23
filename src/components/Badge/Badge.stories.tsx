import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { MockBadgeIcon } from "./MockBadgeIcon";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Badge component is used to display status, labels, or metadata. It supports multiple color variants, shapes, optional icon, and fill/outline styles.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    label: "Add text",
    color: "blue",
    radius: "square",
    outlined: true,
    filled: true,
    icon: undefined,
  },
  argTypes: {
    label: {
      control: "text",
      description: "Text displayed inside the badge",
    },
    color: {
      control: "select",
      options: ["blue", "purple", "red", "green", "yellow", "grey"],
      description: "Badge color variant",
    },
    radius: {
      control: "inline-radio",
      options: ["square", "circle", "rounded"],
      description: "Badge radius shape",
    },
    outlined: {
      control: "boolean",
      description: "Whether the badge shows a border",
    },
    filled: {
      control: "boolean",
      description: "Whether the badge shows a background fill",
    },
    icon: {
      control: "select",
      options: ["none", "mock"],
      mapping: {
        none: undefined,
        mock: <MockBadgeIcon />,
      },
      description: "Optional icon displayed before the label",
    },
    className: {
      control: false,
      table: {
        disable: true,
      },
    },
    testId: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls to explore badge props and supported combinations.",
      },
    },
  },
};

export const Default: Story = {
  parameters: {
    controls: { disable: true },
  },
};

export const BadgeVariations: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const colors = [
      "blue",
      "purple",
      "red",
      "green",
      "yellow",
      "grey",
    ] as const;

    return (
      <div className="flex flex-col gap-4">
        {colors.map((color) => (
          <div key={color} className="flex items-center gap-4">
            <span className="w-28 text-sm font-medium capitalize">{color}</span>

            <div className="flex flex-wrap items-center gap-4">
              <Badge label="Add text" color={color} />
              <Badge label="Add text" color={color} icon={<MockBadgeIcon />} />
              <Badge label="Add text" color={color} filled={false} outlined />
              <Badge label="Add text" color={color} radius="circle" />
              <Badge label="Add text" color={color} radius="rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Color: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const colors = [
      "blue",
      "purple",
      "red",
      "green",
      "yellow",
      "grey",
    ] as const;

    return (
      <div className="flex flex-col gap-4">
        {colors.map((color) => (
          <div key={color} className="flex items-center gap-4">
            <span className="w-28 text-sm font-medium capitalize">{color}</span>
            <Badge label="Add text" color={color} />
          </div>
        ))}
      </div>
    );
  },
};

export const Radius: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const radii = ["square", "circle", "rounded"] as const;

    return (
      <div className="flex flex-col gap-4">
        {radii.map((radius) => (
          <div key={radius} className="flex items-center gap-4">
            <span className="w-28 text-sm font-medium capitalize">
              {radius}
            </span>
            <Badge label="Add text" radius={radius} />
          </div>
        ))}
      </div>
    );
  },
};

export const FillAndOutline: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="w-28 text-sm font-medium">Filled & outlined</span>
          <Badge label="Add text" filled outlined />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-28 text-sm font-medium">Outlined only</span>
          <Badge label="Add text" filled={false} outlined />
        </div>
      </div>
    );
  },
};

export const Icon: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="w-28 text-sm font-medium">Without icon</span>
          <Badge label="Add text" />
        </div>

        <div className="flex items-center gap-4">
          <span className="w-28 text-sm font-medium">With icon</span>
          <Badge label="Add text" icon={<MockBadgeIcon />} />
        </div>
      </div>
    );
  },
};
