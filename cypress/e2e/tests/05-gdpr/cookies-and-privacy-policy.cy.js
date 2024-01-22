let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('set minimum order amount', function () {

  it('set minimum order amount', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-settings')
      .should('be.visible')
      .click();
    cy.get('.flex-col > :nth-child(2) > .btn')
      .should('be.visible')
      .click();
    cy.get('button.absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(4) > .ambar-action-btn')
      .should('be.visible')
      .click();
  });
});

