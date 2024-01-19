let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Payment step', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('payment step', function () {
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
      cy.get(':nth-child(1) > .item > .product')
      .should('be.visible')
      .click();
    cy.get('.plus')
      .should('be.visible')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
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
    cy.get('#shipping-method-flatrate')
      .should('be.visible')
      .click();
    cy.get('#payment-method-checkmo')
      .should('be.visible')
      .click();
    cy.get('.nav-main > .flex > .btn')
      .should('be.visible')
      .click();
  });
});

