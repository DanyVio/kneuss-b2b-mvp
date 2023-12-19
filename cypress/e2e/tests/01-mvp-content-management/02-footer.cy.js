let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Footer', function () {

  it('footer', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get(':nth-child(1) > .footer > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get('.text-primary-lighter > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > .footer > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.get('.copyright > :nth-child(2)')
      .should('be.visible')
      .click();
  });
});
