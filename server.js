// nodejs

var fs = require('fs');
var regex = require("regex");
var pattern = new regex(/[abc.rtf]/i);

// args

basePath = [];

var files = [];
var names = [];

var box { 
		  A12345:"PM_R12345",
		  A67890:"PM_R67890"
		};

var preNumbers ['A12345','A67890','B12345','B67890'];
var postNumbers ['PM_R12345','PM_R67890','PM_R23456','PM_R78912'];

var newName = '/Users/barnabycarter/workspace/test/PM_R123456789.rtf';
var basePath = '/Users/barnabycarter/workspace/test/';

function getNames(path) {
	fs.readdir(path, function (err, files) {
  		if (err) throw err;
  			for (i = 0; i < files.length; i++) { 
  					// console.log(files[i]);
  					
  					//var match = pattern.test(/(A|B)[0-9]{1,9}/i);

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



// run 
		
getNames('/Users/barnabycarter/workspace/test');


function checkName(name){

	var records = [];

	for (i = 0; i < records.length; i++) { 
			
			

	}

}