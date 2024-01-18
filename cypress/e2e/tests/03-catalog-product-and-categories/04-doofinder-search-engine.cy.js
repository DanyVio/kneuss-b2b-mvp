let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Doofinder', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('doofinder', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.wait(2000);
    cy.get('#search')
      .type('testingb2b')
      .click({force: true});
    cy.get('.dfd-close-button')
      .should('be.visible')
      .click();
    cy.get('#search-content-desktop > .search-form > #search_mini_form > #search')
      .should('be.visible')
      .click();
    cy.get('.dfd-close-button')
      .should('be.visible')
      .click();
  });
});





