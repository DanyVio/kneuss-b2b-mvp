let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Shipping step", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("shipping step", function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .level-0 > span").should("be.visible").click();
    cy.get(":nth-child(2) > .item > .product-info > .btn-container > .btn")
      .should("be.visible")
      .click();
    cy.get(".cart-icon > .hidden").should("be.visible").click();
    cy.get(".flex-col > .btn-secondary").should("be.visible").click();
    cy.get("#checkout-link-button").should("be.visible").click();
  });

  it("able to add a new shipping address", function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get("#email").clear().type("test@test.com");
    cy.get("#pass").clear().type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(
      ".block-content > .flex-wrap > :nth-child(1) > .flex > .grow > .mt-3 > span"
    )
      .should("be.visible")
      .click();
    cy.get("#lastname").clear().type("testing");
    cy.get("#firstname").clear().type("testdany");
    cy.get("#company").clear().type("testingdany");
    cy.get("#telephone").clear().type("68768676897");
    cy.get("#street_1").clear().type("testing");
    cy.get("#zip").clear().type("6003");
    cy.get("#city").clear().type("Lucerne");
    cy.get("#country").select("Schweiz");
    cy.get("div.primary > .action").should("be.visible").click();
  });
});
