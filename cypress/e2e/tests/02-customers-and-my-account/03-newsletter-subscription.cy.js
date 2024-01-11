let config = Cypress.config();

describe('Newsletter subscription', function () {

  it('Newsletter subscription', function () {
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
    cy.get('#customer-menu > .hidden')
      .should('be.visible')
      .click();
    cy.get('.absolute > [href="https://knuess-b2b.arcmedia.ch/customer/account/"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > :nth-child(2) > .flex > .grow > .mt-3 > span')
      .should('be.visible')
      .click();
    cy.get('div.primary > .action > span')
      .should('be.visible')
      .click();
    cy.get(':nth-child(11) > a')
      .should('be.visible')
      .click();
  });
});

