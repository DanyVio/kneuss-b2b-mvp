let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Customer login", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("login with a fake user", function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
    cy.get("#email").type("erwtw@testtest.com");
    cy.get("#pass").type("test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get("success-message").should("not.exist");
  });

  it("login successfully", function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);

    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get(".items > :nth-child(2) > a").should("be.visible").click();
    cy.get(".items > :nth-child(3) > a").should("be.visible").click();
    cy.get(".items > :nth-child(4) > a").should("be.visible").click();
    cy.get(".items > :nth-child(5) > a").should("be.visible").click();
    cy.get(".items > :nth-child(6) > a").should("be.visible").click();
    cy.get(".current > strong").should("be.visible").click();
    cy.get(":nth-child(8) > a").should("be.visible").click();
  });
});
