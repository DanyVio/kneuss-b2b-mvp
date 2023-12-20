let config = Cypress.config();

describe('Content page', function () {

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.right-\[80px\]')
      .should('be.visible')
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .click({ force: true });
    cy.get('.left-\[80px\]')
      .should('be.visible')
      .click({ force: true })
      .click({ force: true })
      .click({ force: true });
  });
});