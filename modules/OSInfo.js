var os = require('os');
var colors = require('colors');

var getOSinfo = function() {
	var type = os.type();	
	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	
	console.log('System:'.red , type);
    console.log('Realase:'.green , release);
    console.log('CPU model:'.magenta , cpu);
    console.log('Uptime: ~'.grey , (uptime/60).toFixed(0), 'min');
    console.log('User name:'.yellow , userInfo.username);
    console.log('Home dir:'.blue , userInfo.homedir);
}

exports.print = getOSinfo;