let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shipping step', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('shipping step', function () {
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
    cy.get('#shipping-estimate-toggle')
      .should('be.visible')
      .click();
    cy.get('[name="shippingAddress.country_id"] > .label > .form-select')
      .should('be.visible')
      .select('Schweiz');
    cy.get('#region_id')
      .should('be.visible')
      .select('Lucerne');
    cy.get('.label > .form-input')
      .type('6003');
    cy.get('#shipping_method_flatrate')
      .should('be.visible')
      .click();
    cy.get('#checkout-link-button')
      .should('be.visible')
      .click();
  });

  it('able to add a new shipping address', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get('.block-content > .flex-wrap > :nth-child(1) > .flex > .grow > .mt-3 > span')
      .should('be.visible')
      .click();
    cy.get('#prefix')
      .select('Frau');
    cy.get('#lastname')
      .type('testdany');
    cy.get('#firstname')
      .type('testdany');
    cy.get('#company')
      .type('arcmedia tester');
    cy.get('#telephone')
      .type('68768676897');
    cy.get('#street_1')
      .type('testing');
    cy.get('#zip')
      .type('6003');
    cy.get('#city')
      .type('Lucerne');
    cy.get('#country')
      .select('Schweiz');
    cy.get('div.primary > .action')
      .should('be.visible')
      .click();
  });
});

