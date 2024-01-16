let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('404 page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('404 page', function () {
    cy.visit(`${config.baseUrl}/cuatrocientoscuatro`, { failOnStatusCode: false });
    cy.wait(4000);
    cy.get('p > .btn')
      .should('be.visible')
      .click();
  });
});