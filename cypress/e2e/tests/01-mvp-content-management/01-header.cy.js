let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Header', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('header', function () {
    cy.visit(`${config.baseUrl}`);

    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/produkte.html"]')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/guggeli.html"]')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/schnitzel.html"]')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/schenkel.html"]')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/flugeli.html"]')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/poulet.html"]')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://test-b2b-kneuss.arcmedia.ch/spezial-kuchen.html"]')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
    cy.get('#search-content-desktop > .search-form > #search_mini_form > #search')
      .type('poulet');
    cy.get('.dfd-close-button')
      .should('be.visible')
      .click();
    cy.get('.dfd-logo')
      .should('be.visible')
      .click();
    cy.get('#customer-menu')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
  });
});
