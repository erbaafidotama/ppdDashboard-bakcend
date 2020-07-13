var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ppd_datapos"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;