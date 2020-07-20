const mysql = require("mysql");
const env = process.env.NODE_ENV || "development";
const config = require("../config/database")[env];

const connection = mysql.createConnection(config);

connection.connect(function (err) {
  if (err) return console.log(err);
});

module.exports = connection;
