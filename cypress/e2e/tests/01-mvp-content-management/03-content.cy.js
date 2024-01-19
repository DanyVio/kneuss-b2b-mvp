let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Content page', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);

    cy.get('.owl-next > .fas')
      .should('be.visible')
      .click();
    cy.get('.owl-prev > .fas')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
    cy.scrollTo('center');
    cy.get('[aria-label="Item 1"] > .item > .product')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('.mgz-element-inner > p > a')
      .should('be.visible')
      .click();
  });
});