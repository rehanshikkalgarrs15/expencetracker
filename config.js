/**
config.js
Contains Database and server details
Author:Rehan Shikkalgar
*/

const environment = process.env.ENV;
const PORT = process.env.PORT;


const localSettings = {
	
	database : {
		host : 'localhost',
		user : 'root',
		password : '',
		db : 'expencetracker'
	},

	server : {
		host : '127.0.0.1',
		port : PORT | 3000
	}
}

const productionSettings = {
	
	database : {
		host : 'localhost',
		user : 'root',
		password : '',
		db : 'expencetracker'
	},

	server : {
		host : '127.0.0.1',
		port : PORT | 3000
	}
}

module.exports = function(){
	switch(process.env.ENV){
		case 'local':
			return localSettings;
			break;

		case 'prd':
			return productionSettings;
			break;
		
		default:
			break;
	}
}

