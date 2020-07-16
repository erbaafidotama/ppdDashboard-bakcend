var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

var cors = require('cors')
app.use(cors())

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);