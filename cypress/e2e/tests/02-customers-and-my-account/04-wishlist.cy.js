let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wishlist", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("wishlist button for products", function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .level-0 > span").should("be.visible").click();
    cy.get(":nth-child(1) > .item > .product").should("be.visible").click();
    cy.get("#add-to-wishlist").should("be.visible").click();
    cy.get(".message").should("be.visible");
  });

  it("wishlist my account", function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(".items > :nth-child(6) > a").should("be.visible").click();
    cy.get(".secondary > .action > span").should("be.visible").click();
    cy.get(":nth-child(1) > .level-0 > span");
  });

  it("remove products from the wishlist", function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .level-0 > span").should("be.visible").click();
    cy.get(":nth-child(1) > .item > .product").should("be.visible").click();
    cy.get("#add-to-wishlist").should("be.visible").click();
    cy.get(".btn-remove").should("be.visible").click();
    cy.get(".message").should("be.visible");
  });

  it("move products from my wishlist to cart", function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(":nth-child(1) > .level-0 > span").should("be.visible").click();
    cy.get(":nth-child(1) > .item > .product").should("be.visible").click();
    cy.get("#add-to-wishlist").should("be.visible").click();
    cy.get(".message").should("be.visible");
    cy.get(".product-item-actions > .actions-primary > .action")
      .should("be.visible")
      .click({ multiple: true });
    cy.get(".cart-icon > .hidden").should("be.visible").click();
    cy.get(".flex-col > .btn-secondary").should("be.visible").click();
  });
});
