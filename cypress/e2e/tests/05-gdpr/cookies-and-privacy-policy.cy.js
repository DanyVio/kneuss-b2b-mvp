let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Cookies", function () {
  it("I can see a cookie banner", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-settings").should("be.visible").click();
    cy.get(":nth-child(4) > .ambar-action-btn").should("be.visible").click();
  });

  it("Im able to decline all cookies", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-settings").should("be.visible").click();
    cy.get("#amcookie-classic-group-2").should("be.visible").click().click();
    cy.get("#amcookie-classic-group-3").should("be.visible").click().click();
  });

  it("Im able to accept all cookies", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-settings").should("be.visible").click();
    cy.get("#amcookie-classic-group-2").should("be.visible").click().click();
    cy.get("#amcookie-classic-group-3").should("be.visible").click().click();
    cy.get(":nth-child(4) > .ambar-action-btn").should("be.visible").click();
    cy.get(".ambar-btn-accept").should("be.visible").click();
  });

  it("Im can see/accept the privacy policy by checkboxes", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-settings").should("be.visible").click();
    cy.get("#amcookie-classic-group-2").should("be.visible").click().click();
    cy.get("#amcookie-classic-group-3").should("be.visible").click().click();
    cy.get(":nth-child(4) > .ambar-action-btn").should("be.visible").click();
  });
});
