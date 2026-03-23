/// <reference path="../../../cypress/support/component.d.ts" />

import { Badge } from "./Badge";
import { MockBadgeIcon } from "./MockBadgeIcon";

describe("<Badge />", () => {
  it("renders the default badge", () => {
    cy.mount(<Badge label="Add text" testId="default-badge" />);
    cy.get('[data-testid="default-badge"]')
      .should("exist")
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
      cy.get(`[data-testid="badge-${color}"]`).should("contain.text", color);
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
        .should("have.class", expectedClass)
        .should("contain.text", radius);
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
      .should("not.have.class", "bg-transparent")
      .should("contain.text", "Filled & outlined");
    cy.get('[data-testid="outlined-badge"]')
      .should("be.visible")
      .should("have.class", "bg-transparent")
      .should("contain.text", "Outlined only");
  });

  it("renders an icon when provided", () => {
    cy.mount(
      <Badge label="With icon" icon={<MockBadgeIcon />} testId="icon-badge" />,
    );
    cy.get('[data-testid="icon-badge"]')
      .should("contain.text", "With icon")
      .should("be.visible");
    cy.get('[data-testid="icon-badge"]').find("svg").should("exist");
  });
});
