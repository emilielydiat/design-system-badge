/// <reference path="../../../cypress/support/component.d.ts" />

import { Badge } from "./Badge";
import { MockBadgeIcon } from "./MockBadgeIcon";

describe("<Badge />", () => {
  it("renders the default badge", () => {
    cy.mount(<Badge label="Add text" testId="default-badge" />);
    cy.get('[data-testid="default-badge"]')
      .should("be.visible")
      .should("contain.text", "Add text");
  });

  it("renders all supported color variants", () => {
    const colors = [
      "blue",
      "purple",
      "red",
      "green",
      "yellow",
      "grey",
    ] as const;

    colors.forEach((color) => {
      cy.mount(<Badge label={color} color={color} testId={`badge-${color}`} />);
      cy.get(`[data-testid="badge-${color}"]`)
        .should("be.visible")
        .should("contain.text", color);
    });
  });

  it("renders all supported radius variants with the correct class", () => {
    const radiusClassMap = {
      square: "rounded-badge-square",
      circle: "rounded-badge-circle",
      rounded: "rounded-badge-rounded",
    } as const;

    (
      Object.entries(radiusClassMap) as Array<
        [keyof typeof radiusClassMap, string]
      >
    ).forEach(([radius, expectedClass]) => {
      cy.mount(
        <Badge label={radius} radius={radius} testId={`badge-${radius}`} />,
      );
      cy.get(`[data-testid="badge-${radius}"]`)
        .should("be.visible")
        .should("contain.text", radius)
        .should("have.class", expectedClass);
    });
  });

  it("renders the supported fill and outline variants", () => {
    cy.mount(
      <div className="flex gap-4">
        <Badge
          label="Filled & outlined"
          filled
          outlined
          testId="filled-badge"
        />
        <Badge
          label="Outlined only"
          filled={false}
          outlined
          testId="outlined-badge"
        />
      </div>,
    );
    cy.get('[data-testid="filled-badge"]')
      .should("be.visible")
      .should("contain.text", "Filled & outlined")
      .should("not.have.class", "bg-transparent")
      .should("have.class", "border")
      .should("not.have.class", "border-transparent");
    cy.get('[data-testid="outlined-badge"]')
      .should("be.visible")
      .should("contain.text", "Outlined only")
      .should("have.class", "bg-transparent")
      .should("have.class", "border")
      .should("not.have.class", "border-transparent");
  });

  it("renders an icon when provided", () => {
    cy.mount(
      <Badge label="With icon" icon={<MockBadgeIcon />} testId="icon-badge" />,
    );
    cy.get('[data-testid="icon-badge"]')
      .should("be.visible")
      .should("contain.text", "With icon");
    cy.get('[data-testid="icon-badge"]').find("svg").should("exist");
  });

  it("marks the icon wrapper as decorative when an icon is provided", () => {
    cy.mount(
      <Badge
        label="With icon"
        icon={<MockBadgeIcon />}
        testId="a11y-icon-badge"
      />,
    );
    cy.get('[data-testid="a11y-icon-badge"]')
      .find("svg")
      .parent()
      .should("have.attr", "aria-hidden", "true");
  });

  it("merges a custom className with the default classes", () => {
    cy.mount(
      <Badge
        label="Custom class"
        className="uppercase"
        testId="custom-class-badge"
      />,
    );
    cy.get('[data-testid="custom-class-badge"]')
      .should("be.visible")
      .should("contain.text", "Custom class")
      .should("have.class", "uppercase");
  });

  it("renders a transparent border when outlined is disabled", () => {
    cy.mount(
      <Badge label="No outline" outlined={false} testId="no-outline-badge" />,
    );
    cy.get('[data-testid="no-outline-badge"]')
      .should("be.visible")
      .should("contain.text", "No outline")
      .should("have.class", "border-transparent");
  });

  it("keeps a long label on a single line", () => {
    const longLabel = "Very long badge label for edge case testing";

    cy.mount(<Badge label={longLabel} testId="long-label-badge" />);
    cy.get('[data-testid="long-label-badge"]')
      .should("be.visible")
      .should("contain.text", longLabel)
      .should("have.class", "whitespace-nowrap");
  });

  it("renders a combined variant with multiple non-default props", () => {
    cy.mount(
      <Badge
        label="Combined variant"
        color="purple"
        radius="rounded"
        filled={false}
        outlined
        icon={<MockBadgeIcon />}
        className="uppercase"
        testId="combined-badge"
      />,
    );
    cy.get('[data-testid="combined-badge"]')
      .should("be.visible")
      .should("contain.text", "Combined variant")
      .should("have.class", "rounded-badge-rounded")
      .should("have.class", "bg-transparent")
      .should("have.class", "border")
      .should("not.have.class", "border-transparent")
      .should("have.class", "uppercase");
    cy.get('[data-testid="combined-badge"]').find("svg").should("exist");
  });
});
