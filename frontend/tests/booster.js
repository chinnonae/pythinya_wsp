var chromedriver = require('chromedriver');
function pause(client) {
  // client.pause(5000);
}
function signout(client) {
  client
    .assert.visible('button[id=signout-btn]')
    .click('button[id=signout-btn]')
    .pause(1000)
    .assert.visible('button[id=signin-button]');
    pause(client);
}
module.exports = {
  before : function(done) {
    chromedriver.start();
  },

  after : function(done) {
    chromedriver.stop();
  },
  'Sign in with booster account' : function (client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.visible('button[id=signin-button]')
      .click('button[id=signin-button]')
      .pause(1000)
      .assert.visible('input[id=email]')
      .assert.visible('input[id=password]')
      .setValue('input[id=email]', 'charles.x@gmail.com')
      .setValue('input[id=password]', '1234')
      .waitForElementVisible('button[id=submit-btn]', 1000)
      .click('button[id=submit-btn]')
      .pause(1000)
      .assert.visible('button[id=booster-panel-btn]');
      pause(client);
  },
  'Create new ticket' : function (client) {
    client
      .assert.visible('button[id=new-ticket-btn]')
      .click('button[id=new-ticket-btn]')
      .pause(1000)
      .assert.visible('input[id=min_mmr]')
      .assert.visible('input[id=max_mmr]')
      .setValue('input[id=min_mmr]', 4000)
      .setValue('input[id=max_mmr]', 5000)
      .setValue('input[id=price]', 3500)
      .setValue('input[id=day_used]', 4)
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .pause(1000)
      .assert.containsText('table tr:last-child td:last-child','4000-5000')
      .pause(1000);
      pause(client);
  },
  'Booster signing out': function(client) {
    client
      .assert.visible('button[id=signout-btn]')
      .click('button[id=signout-btn]')
      .pause(1000)
      .assert.visible('button[id=signin-button]');
      pause(client);
  },
  'Sign in with client account': function(client) {
    client
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
      .assert.elementNotPresent('#booster-panel-btn')
      .assert.containsText('table tr:last-child td:last-child','4000-5000');
      pause(client);
  },
  'expect the ticket is shown': function(client) {
    client
      .assert.containsText('table tr:last-child td:last-child','4000-5000');
      pause(client);
  },
  'expect the coin is shown': function(client) {
    client
      .assert.containsText('div','10000 Coins');
      pause(client);
  },
  'buy a latest ticket': function(client) {
    client
      .assert.visible('tr')
      .assert.containsText('table tr:last-child td:last-child','4000-5000')
      .click('table tr:last-child td:last-child')
      .pause(1000)
      .assert.visible('button[id=buy-ticket-btn]')
      .click('button[id=buy-ticket-btn]')
      .pause(1000);
      pause(client);
  },
  'Client signing out': function(client) {
    client
      .assert.visible('button[id=signout-btn]')
      .click('button[id=signout-btn]')
      .pause(1000)
      .assert.visible('button[id=signin-button]');
      pause(client);
  },
  'Sign in with booster account 2' : function (client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.visible('button[id=signin-button]')
      .click('button[id=signin-button]')
      .pause(1000)
      .assert.visible('input[id=email]')
      .assert.visible('input[id=password]')
      .setValue('input[id=email]', 'charles.x@gmail.com')
      .setValue('input[id=password]', '1234')
      .waitForElementVisible('button[id=submit-btn]', 1000)
      .click('button[id=submit-btn]')
      .pause(1000)
      .assert.visible('button[id=booster-panel-btn]');
      pause(client);
  },
  'Go to booster panel': function (client) {
    client
      .assert.visible('button[id=booster-panel-btn]')
      .click('button[id=booster-panel-btn]')
      .pause(1000)
      .assert.containsText('p', 'Contact list');
  },
  'expect latest client to be shown': function (client) {
    client
      .assert.containsText('table tr:last-child td:first-child','อนุรักษ์ ใจแก้ว');
  },
  'Show client dialog': function(client) {
    client
      .click('table tr:last-child td:first-child')
      .pause(1000)
      .assert.visible('button[id=confirm-boosting-btn]')
      .click('button[id=confirm-boosting-btn]')
      .pause(1000)
      .assert.containsText('#waiting-label', 'Waiting for payment from');
  }
};
