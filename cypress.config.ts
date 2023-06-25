const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        chromeWebSecurity : false,
        baseUrl : "http://localhost:3003",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
