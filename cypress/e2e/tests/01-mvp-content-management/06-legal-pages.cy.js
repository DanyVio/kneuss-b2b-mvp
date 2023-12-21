let config = Cypress.config();

describe('Legal Pages', function () {

  it('legal pages', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.copyright > :nth-child(2)')
      .click();
    cy.scrollTo('top');
  });
});