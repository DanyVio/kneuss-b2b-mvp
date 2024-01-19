let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Product detail page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('product detail page', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .level-0 > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > .item > .product')
      .should('be.visible')
      .click();
    cy.get('.outline-offset-2')
      .should('be.visible')
      .click();
    cy.get('.text-gray-500')
      .should('be.visible')
      .click();
    cy.get('#add-to-wishlist')
      .should('be.visible')
      .click();
    cy.get('.secondary > .action > span')
      .should('be.visible')
      .click();
    cy.get('.actions-primary > .action')
      .should('be.visible')
      .click();
    cy.get(':nth-child(12) > a')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
  });
});