let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Payment method', function () {

  it('payment method', function () {
    cy.visit(`${config.baseUrl}`);
    
    cy.get('#customer-menu > .hidden')
      .should('be.visible')
      .click();
    cy.get('.absolute > [href="https://knuess-b2b.arcmedia.ch/customer/account/index/"]')
      .should('be.visible')
      .click();
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
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
      .select('Switzerland');
    cy.get('#region_id')
      .should('be.visible')
      .select('Lucerne');
    cy.get('.label > .form-input')
      .type('6003');
    cy.get('#shipping_method_freeshipping')
      .should('be.visible')
      .click();
    cy.get('#checkout-link-button')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('.nav-main > .flex > .btn')
      .should('be.visible')
      .click();
  });
});

