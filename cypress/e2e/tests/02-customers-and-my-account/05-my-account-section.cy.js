
let config = Cypress.config();

describe('Shop Registration', function () {

  it('Create a customer', function () {
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

