let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('shop registration', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('Create a customer', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('#customer-menu > .hidden')
      .should('be.visible')
      .click();
    cy.get('.absolute > [href="https://knuess-b2b.arcmedia.ch/customer/account/create/"]')
      .should('be.visible')
      .click();
    cy.get('#firstname')
      .type('test');
    cy.get('#lastname')
      .type('testdany');
    cy.get('#is_subscribed')
      .should('be.visible')
      .click();
    cy.get('#assistance_allowed_checkbox')
      .should('be.visible')
      .click();
    cy.get('#email_address')
      .type('test@test.com');
    cy.get('#password')
      .type('Test1234');
    cy.get('#password-confirmation')
      .type('Test1234');
    cy.get('div.primary > .action > span')
      .should('be.visible')
      .click();
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
    cy.get('.items > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.get('.items > :nth-child(3) > a')
      .should('be.visible')
      .click();
    cy.get('.items > :nth-child(4) > a')
      .should('be.visible')
      .click();
    cy.get('.items > :nth-child(5) > a')
      .should('be.visible')
      .click();
    cy.get('.items > :nth-child(6) > a')
      .should('be.visible')
      .click();
    cy.get('.items > :nth-child(7) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(8) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(9) > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(11) > a')
      .should('be.visible')
      .click();
  });
});

