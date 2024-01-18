let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Categories', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('entry with “All products” in the main menu', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .level-0 > span')
      .should('be.visible')
      .click();
  });

  it('3 levels of categories inside “All products” entry', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .level-0 > span')
      .should('be.visible')
      .click();
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/produkte/bachofe-guggeli.html"] > .subcategory > .relative')
      .should('be.visible')
      .click();
  });

  it('subcategories in the category page as filter (sidebar)', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .level-0 > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .filter-options-content > .items > :nth-child(3) > .flex > :nth-child(1)')
      .should('be.visible')
      .click();
  });

  it('choose between grid, list or table view', function () {
    cy.visit(`${config.baseUrl}customer/account/login/`);
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .level-0 > span')
      .should('be.visible')
      .click();
    cy.get('.mode-list')
      .should('be.visible')
      .click();
    cy.wait(3000);
    cy.get('.mode-grid')
      .should('be.visible')
      .click();
  });
});

