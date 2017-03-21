var config = require('../nightwatch.conf.js');

module.exports = {
	revatureTimesheet: function (browser) {
		var creds	= browser.globals.bef();
	  	browser
	  	  .url('https://mv.force.com/revature/reLogin')
	  	  .waitForElementVisible('body', 1000)
		  .waitForElementVisible('div.container > div > div > div > div:nth-child(2) > form > fieldset > div > div > input', 1000)
	  	  .setValue('div.container > div > div > div > div:nth-child(2) > form > fieldset > div > div > input', creds.username)
	  	  .setValue('div.container > div > div > div > div:nth-child(2) > form > fieldset > div:nth-child(2) > div > input', creds.password)
	  	  .waitForElementVisible('input[value=Login]', 1000)
	  	  .click('input[value=Login]')
	  	  .pause(10000)
		  .click('div > table > tbody > tr > th > input')
		  .pause(5000);
    }
};
