require('env2')('.env');

exports.config = {
  user: process.env.BROWSER_USERNAME,
  key: process.env.BROWSER_ACCESS_KEY,

  updateJob: false,
  specs: [
    './tests/testLogin.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'single_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 1000,
  connectionRetryTimeout: 9000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
