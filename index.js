var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.json());

// các route
require('./app/routes/routes')(app)

// mở cổng server
app.listen(3000, function(){

})
