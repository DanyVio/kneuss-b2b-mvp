let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Filters and layered navigation', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('filters and layered navigation', function () {
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
    cy.get(':nth-child(1) > .filter-options-title')
      .should('be.visible')
      .click();
    cy.get('.filter-options-content > .items > :nth-child(2) > .flex')
      .should('be.visible')
      .click();
    cy.get('.item > :nth-child(2) > .py-2')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > .filter-options-title')
      .should('be.visible')
      .click();
    cy.scrollTo('top');
  });

  it('filtered by price', function () {
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
    cy.get(':nth-child(2) > .filter-options-title')
      .should('be.visible')
      .click()
      .click();
    cy.get(':nth-child(2) > .filter-options-content > .items > :nth-child(3) > .flex > :nth-child(1)')
      .should('be.visible')
      .click();
  });

  it('filtered by traffic light', function () {
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
    cy.get(':nth-child(3) > .filter-options-title')
      .should('be.visible')
      .click()
      .click();
  });
});