module.exports = {
	username: 'na',
	password: 'na',
  	bef: function () {
		var argv	= require('yargs').argv;
		// console.log(argv.username);
		// browser.globals.username	= argv.username;
		// browser.globals.password	= argv.password;
		var creds = new Object();
	        username	= argv.username;
	        password	= argv.password;
	    return creds;
    }
};
