let config = Cypress.config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("faq pages", function () {
  beforeEach("before each test", function () {
    cy.visit(`${config.baseUrl}`);
    cy.get(".ambar-btn-accept").should("be.visible").click();
    cy.wait(3000);
  });

  it("faq page", function () {
    cy.visit(`${config.baseUrl}/faqs`);
    cy.get(
      ".mgz-panel-first > .mgz-panel-heading > .mgz-panel-heading-title > .has-icon"
    )
      .should("be.visible")
      .click()
      .click();
    cy.get(
      ":nth-child(2) > .mgz-panel-heading > .mgz-panel-heading-title > .has-icon > span"
    )
      .should("be.visible")
      .click()
      .click();
    cy.get(
      ":nth-child(3) > .mgz-panel-heading > .mgz-panel-heading-title > .has-icon > span"
    )
      .should("be.visible")
      .click()
      .click();
    cy.get(
      ".mgz-panel-last > .mgz-panel-heading > .mgz-panel-heading-title > .has-icon > span"
    )
      .should("be.visible")
      .click()
      .click();
  });
});
