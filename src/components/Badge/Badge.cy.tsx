/// <reference path="../../../cypress/support/component.d.ts" />

import { Badge } from "./Badge";
import { MockBadgeIcon } from "./MockBadgeIcon";

describe("<Badge />", () => {
  it("renders the default badge", () => {
    cy.mount(<Badge label="Add text" />);
    cy.contains("Add text").should("be.visible");
    cy.get('[data-testid="badge"]').should("exist");
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
      cy.mount(<Badge label={color} color={color} />);
      cy.contains(color).should("be.visible");
    });
  });

  it("renders all supported radius variants with the correct class", () => {
    const radiusClassMap = {
      square: "rounded-badge-square",
      rounded: "rounded-badge-rounded",
      circle: "rounded-badge-circle",
    } as const;

    (
      Object.entries(radiusClassMap) as Array<
        [keyof typeof radiusClassMap, string]
      >
    ).forEach(([radius, expectedClass]) => {
      cy.mount(<Badge label={radius} radius={radius} />);
      cy.contains(radius).should("be.visible");
      cy.get('[data-testid="badge"]').should("have.class", expectedClass);
    });
  });

  it("renders the supported fill and outline variants", () => {
    cy.mount(
      <div className="flex gap-4">
        <Badge label="Filled & outlined" filled outlined />
        <Badge label="Outlined only" filled={false} outlined />
      </div>,
    );
    cy.contains("Filled & outlined").should("be.visible");
    cy.contains("Outlined only")
      .should("be.visible")
      .closest('[data-testid="badge"]')
      .should("have.class", "bg-transparent");
  });

  it("renders an icon when provided", () => {
    cy.mount(<Badge label="With icon" icon={<MockBadgeIcon />} />);
    cy.contains("With icon").should("be.visible");
    cy.get('[data-testid="badge"]').find("svg").should("exist");
  });
});
