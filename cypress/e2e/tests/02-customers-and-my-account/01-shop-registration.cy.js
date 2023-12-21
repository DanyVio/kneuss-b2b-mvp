let config = Cypress.config();

describe('Shop Registration', function () {

  it('Create a customer', function () {
    cy.visit(`${config.baseUrl}`);
  });
});

