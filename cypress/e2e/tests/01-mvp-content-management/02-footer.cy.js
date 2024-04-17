let config = Cypress.config();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Check the Footer', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.ambar-btn-accept')
      .should('be.visible')
      .click();
    cy.wait(3000);
  });

  it('footer', function () {
    cy.visit(`${config.baseUrl}`);
    cy.scrollTo('bottom');
    cy.get('.nav.item').children().contains('Alle Produkte')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('.nav.item').children().contains('Güggeli / Poulet')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('.nav.item').children().contains('Schnitzel / Brust')
      .should('be.visible')
      .click();
    cy.get('.nav.item').children().contains('Schenkel')
      .should('be.visible')
      .click();
    cy.get('.nav.item').children().contains('Flügeli')
      .should('be.visible')
      .click();
    cy.get('.nav.item').children().contains('Spiessli')
      .should('be.visible')
      .click();
    cy.get('.nav.item').children().contains('Spezialitäten')
      .should('be.visible')
      .click();
    cy.get('.text-primary-lighter > a')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > .footer > :nth-child(2) > a')
      .should('be.visible')
      .click();
    cy.get('#newsletter-subscribe')
      .type('test@test.com');
    cy.get('.shrink-0')
      .should('be.visible')
      .click();
    cy.get('.message')
      .should('be.visible');
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/agb/"]')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/impressum/"]')
      .should('be.visible')
      .click();
    cy.scrollTo('bottom');
    cy.get('[href="https://test-b2b-kneuss.arcmedia.ch/enable-cookies/"]')
      .should('be.visible')
      .click();
    cy.get('.store-logo')
      .should('be.visible')
      .click();
  });
});
