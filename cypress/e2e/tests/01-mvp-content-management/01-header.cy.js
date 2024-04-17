let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Check the Header", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("header", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(":nth-child(1) > .level-0 > span").should("be.visible").click();
    cy.get(":nth-child(2) > .level-0 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(".flex-wrap > :nth-child(3) > .level-0 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(":nth-child(4) > .level-0 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(".border-secondary > .level-0 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(":nth-child(6) > .level-0 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(":nth-child(7) > .level-0 > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(".store-logo").should("be.visible").click();
    cy.get(
      "#search-content-desktop > .search-form > #search_mini_form > #search"
    ).type("poulet");
    cy.get(".dfd-close-button").should("be.visible").click();
    cy.get(".dfd-logo").should("be.visible").click();
    cy.get("#customer-menu").should("be.visible").click();
    cy.get(".store-logo").should("be.visible").click();
  });
});
