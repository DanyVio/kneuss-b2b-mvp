let config = Cypress.config();

describe('Content page', function () {

  it('components home page', function () {
    cy.visit(`${config.baseUrl}`);
  });
});