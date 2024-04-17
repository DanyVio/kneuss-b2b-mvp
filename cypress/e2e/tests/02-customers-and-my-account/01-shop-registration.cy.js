let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("shop registration", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("Create a customer", function () {
    cy.visit(`${config.baseUrl}/customer/account/create/`);

    cy.get("#firstname").clear().type("testtest");
    cy.get("#lastname").clear().type("testdany");
    cy.get('#street_1').type('test');
    cy.get('#zip').type('6003');
    cy.get('#city').type('Luzern');
    cy.get("#email_address").clear().type("testdany@test.com");
    cy.get("#password").clear().type("Test1234");
    cy.get("#password-confirmation").clear().type("Test1234");
    cy.get("div.primary > .action > span").should("be.visible").click();
    cy.visit(`${config.baseUrl}/customer/account/login/`);
    cy.get("#email").type("test@test.com");
    cy.get("#pass").type("Test1234");
    cy.get(".fieldset > .actions-toolbar > .btn > span")
      .should("be.visible")
      .click();
    cy.get("#customer-menu > .hidden").should("be.visible").click();
    cy.get("#customer-menu > .hidden").should("be.visible").click();
    cy.get(".items > :nth-child(2) > a").should("be.visible").click();
    cy.get(".items > :nth-child(3) > a").should("be.visible").click();
    cy.get(".items > :nth-child(4) > a").should("be.visible").click();
    cy.get(".items > :nth-child(5) > a").should("be.visible").click();
    cy.get(".items > :nth-child(6) > a").should("be.visible").click();
    cy.get(".current > strong").should("be.visible").click();
    cy.get(":nth-child(8) > a").should("be.visible").click();
  });
});
