let config = Cypress.config();

describe('404 Page', function () {

  it('404 page', function () {
    cy.visit(`${config.baseUrl}/cuatrocientoscuatro`, { failOnStatusCode: false });
    // cy.visit(`${config.baseUrl}/cuatrocientoscuatro`);
  });
});