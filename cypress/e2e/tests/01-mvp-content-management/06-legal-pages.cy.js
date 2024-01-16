let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('legal pages', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('legal pages', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/agb/"]')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/impressum/"]')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/enable-cookies/"]')
      .should('be.visible')
      .click();
    cy.scrollTo('top');
    cy.get('.store-logo')
      .should('be.visible')
      .click();
  });
});