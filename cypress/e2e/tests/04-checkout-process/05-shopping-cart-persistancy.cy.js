let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping cart persistancy', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('shopping cart persistancy', function () {
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
    cy.get(':nth-child(2) > .item > .product-info > .btn-container > .btn')
      .should('be.visible')
      .click();
    cy.get('.cart-icon > .hidden')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > :nth-child(2) > .underline')
      .should('be.visible')
      .click();
  });

  it('checking the cart', function () {
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
    cy.get(':nth-child(2) > .item > .product-info > .btn-container > .btn')
      .should('be.visible')
      .click();
    cy.get('.cart-icon > .hidden')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > :nth-child(2) > .underline')
      .should('be.visible')
      .click();
  });
});

