let config = Cypress.config();

describe('Content page', function () {

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);

    cy.get(':nth-child(1) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get('.grid > :nth-child(2) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(3) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(4) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(5) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(6) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(7) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
    cy.get(':nth-child(8) > a > .absolute')
      .should('be.visible')
      .click({ force: true });
  });
});