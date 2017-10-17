require('env2')('../../.env');

exports.config = {
  'specs': [ '../test/' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': "${BROWSERSTACK_USERNAME}",
    'browserstack.key': "${BROWSERSTACK_ACCESS_KEY}",
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  }
};
