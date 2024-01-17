let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Newsletter subscription', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('Newsletter subscription', function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
 
    cy.get('#email')
      .type('test@test.com');
    cy.get('#pass')
      .type('Test1234');
    cy.get('.fieldset > .actions-toolbar > .btn > span')
      .should('be.visible')
      .click();
    cy.get('#customer-menu > .hidden')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > :nth-child(2) > .flex > .grow > .mt-3 > span')
      .should('be.visible')
      .click();
    cy.get('div.primary > .action > span')
      .should('be.visible')
      .click();
    cy.get('.message')
      .should('be.visible');
  });
});

