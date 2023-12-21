let config = Cypress.config();

describe('Content page', function () {

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.copyright > :nth-child(2)')
      .click();
    cy.scrollTo('top');
  });
});