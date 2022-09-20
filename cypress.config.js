const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e6twp6',
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/e2e/**/*.spec.{js, jsx, ts, tsx}'
    },
});