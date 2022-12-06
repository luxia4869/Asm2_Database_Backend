var express = require('express');
const cors = require("cors");
// var {login} = require('../app/controllers/')
// const Routes = require("./app/routes/routes");
global.login = {
    user: "",
    password: ""
}
const user = {
    userName: "sa",
    password: "12"
}
var app = express();
// app.post('/user', login);
const getLogin = function(req, res){
    const userName = req.body.user
    const password = req.body.password
    if (userName!=user.userName || password!=user.password) {
        res.send("Username or password are not correct!")
    }
    else {
        login.user=userName;
        login.password=password;
        res.send("Login success!")
        require('./app/routes/routes')(app)
    }
};


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.post('/user', getLogin);
// require('./app/routes/routes')(app)

// app.use("/api/auth", Routes);
// các route
//require('./app/routes/routes')(app)
// mở cổng server
app.listen(5000, function(){

})
