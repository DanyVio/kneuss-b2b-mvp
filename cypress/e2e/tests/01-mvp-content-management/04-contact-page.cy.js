let config = Cypress.config();


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Contact page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });
  it('contact page', function () {
    cy.visit(`${config.baseUrl}/contact`);
    cy.get('#name')
      .type('test');
    cy.get('#email')
      .type('test@test.com');
    cy.get('#telephone')
      .type('987878676756');
    cy.get('#comment')
      .type('testing');
    cy.get('#contact > .mt-6 > .btn')
      .should('be.visible')
      .click();
    cy.get('.message')
      .should('be.visible');
  });
});