let config = Cypress.config();

describe('FAQ', function () {

  it('faq page', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.copyright > :nth-child(3)')
      .click();
    cy.scrollTo('top');
  });
});