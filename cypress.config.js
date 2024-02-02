const { defineConfig } = require("cypress");
const moment = require('moment');

const dateTime = moment().format('DD-MM-YYYY_HH-mm-ss');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    video: true,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: `cypress/reports/${dateTime}`,
    quiet: true,
    overwrite: false,
    html: true,
    json: true,
  },
  screenshotsFolder: `cypress/reports/${dateTime}/evidências`,
});
