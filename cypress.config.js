const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qahmm4',
  e2e: {
    baseUrl: 'https://automationintesting.online', // ✅ Correct placement (no trailing slash)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});