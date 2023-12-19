const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "",
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://arcmedia:arcmedia123@knuess-b2b.arcmedia.ch",
    viewportWidth: 1920,
    viewportHeight: 1280,
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
  
  defaultCommandTimeout: 10000,
  execTimeout: 120000,
  taskTimeout: 120000,
  numTestsKeptInMemory: 0
});