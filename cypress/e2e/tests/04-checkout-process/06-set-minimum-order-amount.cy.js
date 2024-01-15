let config = Cypress.config();

describe('Set minimum order amount', function () {

  it('set minimum order amount', function () {
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
    cy.get('#customer-menu > .hidden')
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

