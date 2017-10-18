var assert = require('assert');

describe('Cinebody', function() {
  it('can log user in', function () {
    browser
      .url('https://pro.cinebody.com/projects')
      .setValue('input[type=email]', "karina@barbershop.io")
      .setValue('input[type=password]', "Phshappy14$")
      .click('button[type=submit]')

    assert(browser.getTitle().match('login'));
  });
});
