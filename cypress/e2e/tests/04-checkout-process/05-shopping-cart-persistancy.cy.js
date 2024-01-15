let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Shopping cart persistancy', function () {

  it('shopping cart persistancy', function () {
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
    cy.get('[action="https://knuess-b2b.arcmedia.ch/checkout/cart/add/uenc/%25uenc%25/product/2232/"] > .product-info > .actions > .add-to-cart-btn')
      .should('be.visible')
      .click();
    cy.get('.cart-icon > .hidden')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > :nth-child(2) > .underline')
      .should('be.visible')
      .click();
  });

  it('checking the cart', function () {
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
    cy.get('[action="https://knuess-b2b.arcmedia.ch/checkout/cart/add/uenc/%25uenc%25/product/2232/"] > .product-info > .actions > .add-to-cart-btn')
      .should('be.visible')
      .click();
    cy.get('.cart-icon > .hidden')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > :nth-child(2) > .underline')
      .should('be.visible')
      .click();
  });
});

