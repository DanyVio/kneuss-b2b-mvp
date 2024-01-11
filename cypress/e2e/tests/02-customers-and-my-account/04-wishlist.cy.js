
let config = Cypress.config();

describe('wishlist', function () {

  it('wishlist', function () {
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
    cy.get('.absolute > [href="https://knuess-b2b.arcmedia.ch/wishlist/"]')
      .should('be.visible')
      .click();
    cy.get(':nth-child(11) > a')
      .should('be.visible')
      .click();
  });
});

