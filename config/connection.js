//************************************************************************************
//This file intitiates the Connection to MYSQL
//***************************************************************************************
<<<<<<< HEAD

// Dependencies
var Sequelize = require("sequelize");

=======
// Dependencies
var Sequelize = require("sequelize");
>>>>>>> 03959af00ff8272e9f016dda55db36c533c12b06
//Creates mySQL connection using Sequelize, the empty string is where the password
var sequelize = new Sequelize("sequelize_library", "root", "", {
  host: "localhost",
  PORT: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
<<<<<<< HEAD

=======
>>>>>>> 03959af00ff8272e9f016dda55db36c533c12b06
// Exports the connection for other files to use
module.exports = sequelize;
