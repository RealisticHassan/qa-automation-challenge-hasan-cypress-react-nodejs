const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true, // don't delete folder, just overwrite
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
video: true,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});