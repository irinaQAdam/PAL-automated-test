const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //specPattern: 'cypress/testcases/**/*.cy.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  proxy: {"cypress/support/proxy.js"}
  /*hosts: {
    "localai.northeurope.cloudapp.azure.com"
  }*/
});
