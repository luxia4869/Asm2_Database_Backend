var express = require('express');
const cors = require("cors");
// const Routes = require("./app/routes/routes");
global.login = {
    user: "",
    password: ""
}
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
// app.use("/api/auth", Routes);

// các route
require('./app/routes/routes')(app)


// mở cổng server
app.listen(5000, function(){

})
