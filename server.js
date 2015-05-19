// nodejs

var fs = require('fs');
var regex = require("regex");
var pattern = new regex(/[abc.rtf]/i);

// args

basePath = [];

var files = [];
var names = [];

var box = { 
		  A12345:"R12345",
		  A67890:"R67890"
		};


var newName = '/Users/barnabycarter/workspace/test/PM_R123456789.rtf';
var basePath = '/Users/barnabycarter/workspace/test/';

function getNamesMOD(path) {
	fs.readdir(path, function (err, files) {
  		if (err) throw err;
  			for (i = 0; i < files.length; i++) { 
  					
  					var match = pattern.test(/[abc.rtf]/i);


  					if (files[i] = match) {
  						console.log(match);
  						var oldName = basePath.concat(files[i]);
  					
  						fs.rename(oldName, newName, function (err) {
		  							if (err) {
		  								console.log(err); 
		  							} else {
		  								console.log('successfully renamed');
		  							} 
							 
							});
  					}

  			}
 			
		});
}



function getNames(path) {
	fs.readdir(path, function (err, files) {
  		if (err) throw err;
  		
  			return files;

		});
}


function printFiles(path) {
	getNames(path);
}


// run 
		
printFiles('/Users/barnabycarter/workspace');


