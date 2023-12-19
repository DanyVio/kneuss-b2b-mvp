let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Header', function () {

  it('preheader', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.hidden > :nth-child(1) > .text-secondary')
      .should('be.visible')
      .click();
    cy.get('.hidden > :nth-child(2) > .text-secondary')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
    cy.get('#search-content-desktop > .search-form > #search_mini_form > #search')
      .type('poulet');
    cy.get('.flex-col > .flex')
      .click({force: true});
    cy.get('#customer-menu > .hidden')
      .should('be.visible')
      .click();
    cy.get('.list-icon > .hidden')
      .should('be.visible')
      .click();
    cy.get('.cart-icon > .hidden')
      .should('be.visible')
      .click();
  });
});
