
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
    cy.get(':nth-child(1) > .filter-options-title')
      .should('be.visible')
      .click()
      .click();
    cy.get(':nth-child(2) > .filter-options-title')
      .should('be.visible')
      .click()
      .click();
    cy.get(':nth-child(3) > .filter-options-title')
      .should('be.visible')
      .click()
      .click();
    cy.scrollTo('bottom');
    cy.get('.z-0 > :nth-child(3) > .page > :nth-child(2)')
      .should('be.visible')
      .click();
    cy.get('.next')
      .should('be.visible')
      .click();
    cy.get('.action > .flex')
      .should('be.visible')
      .click();
    cy.get('.category41 > .font-inter').should('be.visible')
      .should('be.visible')
      .click();
  });
});

