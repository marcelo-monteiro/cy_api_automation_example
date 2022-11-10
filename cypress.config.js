const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  }
}
