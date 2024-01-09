let config = Cypress.config();

describe('categories', function () {

  it('categories', function () {
    cy.visit(`${config.baseUrl}`);

    cy.get('#customer-menu > .hidden')
      .should('be.visible')
      .click();
    cy.get('.absolute > [href="https://knuess-b2b.arcmedia.ch/customer/account/index/"]')
      .should('be.visible')
      .click();
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get('.level-0 > [href="https://knuess-b2b.arcmedia.ch/alle-produkte.html"]')
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
    cy.get('.filter-options-content > .items > li > .flex')
      .should('be.visible')
      .click();
    cy.get('.item > :nth-child(2) > .py-2')
      .should('be.visible')
      .click();
  });
});