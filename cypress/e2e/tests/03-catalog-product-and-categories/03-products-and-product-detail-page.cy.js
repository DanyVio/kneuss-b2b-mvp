let config = Cypress.config();

describe('categories', function () {

  it('categories', function () {
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
    cy.get('.level-0 > [href="https://knuess-b2b.arcmedia.ch/alle-produkte.html"]')
      .should('be.visible')
      .click();
    cy.get('[action="https://knuess-b2b.arcmedia.ch/checkout/cart/add/uenc/%25uenc%25/product/2232/"]')
      .should('be.visible')
      .click();
    cy.get('#add-to-wishlist')
      .should('be.visible')
      .click();
    cy.get('.secondary > .action > span')
      .should('be.visible')
      .click();
  });
});