const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    //was having issues accessing the site remotely, by disabling this i was able to run tests against the site.  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

