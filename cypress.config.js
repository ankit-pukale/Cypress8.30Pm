const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    defaultCommandTimeout:15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
