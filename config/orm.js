var connection = require("./connection.js");

var tableName = "burgers";
var col = "burger_name, devoured, date";

var orm = {

	selectAll: function(cb) {
		var queryString = "SELECT * FROM " + tableName + ";";
		
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	insertOne: function(vals, cb) {
		var queryString = "INSERT INTO " + tableName + " (" + col + ") VALUES ('" + vals + "', FALSE, CURRENT_TIMESTAMP);";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	},

	updateOne: function(objColVals, condition, cb) {
		var queryString = "UPDATE " + tableName + " SET devoured = " + objColVals + " WHERE " + condition + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);			
		});
	}

};

module.exports = orm;