// Dependencies
// ============================================================================

// Sequelize (Uppercase) references the standard library
var Sequelize = require ("sequelize");
// sequelize (lowercase) references my connection to the DB
var sequelize = require("../config/connection.js");

// Creates a 'message' model that matches up with our DB

var Message = sequelize.define("message", 
{
    topic: DataTypes.STRING,
    userId: DataTypes.INTERGER,
    author: DataTypes.STRING
});

// Syncs with DB
Message.sync();

// This makes the Message Model availale for other files and will also create a table. 