var chromedriver = require('chromedriver');
module.exports = {
  before : function(done) {
    chromedriver.start();
  },

  after : function(done) {
    chromedriver.stop();
  },
  // 'Sign up' : function (client) {
  //   client
  //     .url('http://localhost:8080')
  //     .waitForElementVisible('body', 1000)
  //     .assert.visible('button[id=signup-button]')
  //     .click('button[id=signup-button]')
  //     .pause(1000)
  //     .assert.visible('input[id=firstname]')
  //     .assert.visible('input[id=lastname]')
  //     .assert.visible('input[id=email]')
  //     .assert.visible('input[id=password]')
  //     .assert.visible('input[id=mobileNumber]')
  //     .setValue('input[id=firstname]', 'อนุรักษ์')
  //     .setValue('input[id=lastname]', 'ใจแก้ว')
  //     .setValue('input[id=email]', 'anurak@gmail.com')
  //     .setValue('input[id=password]', '1234')
  //     .setValue('input[id=mobileNumber]', '0832224444')
  //     .waitForElementVisible('button[id=submit-btn]', 1000)
  //     .click('button[id=submit-btn]')
  //     .pause(1000)
  //     .assert.containsText('div','Filter by MMR')
  //     .end();
  // },
  'Sign in' : function (client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.visible('button[id=signin-button]')
      .click('button[id=signin-button]')
      .pause(1000)
      .assert.visible('input[id=email]')
      .assert.visible('input[id=password]')
      .setValue('input[id=email]', 'anurak@gmail.com')
      .setValue('input[id=password]', '1234')
      .waitForElementVisible('button[id=submit-btn]', 1000)
      .click('button[id=submit-btn]')
      .pause(1000)
      .assert.containsText('div','Filter by MMR')
      .end();
  }
};
