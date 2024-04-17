let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("set minimum order amount", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("set minimum order amount", function () {
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
    cy.get(":nth-child(1) > .level-0 > span").should("be.visible").click();
    cy.get(":nth-child(1) > .item > .product").should("be.visible").click();
    cy.get(".plus")
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();
    cy.get("#product-addtocart-button").should("be.visible").click();
  });
});
