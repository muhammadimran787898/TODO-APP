
let express = require('express');
let dataPath = require('path');
let bodyParser = require('body-parser')
let myApp = express()
let userData = [];
myApp.use(bodyParser.json());
myApp.post('/signUp', function (req, res) {
    res.end(JSON.stringify(req.body));
    userData.push(req.body);
    console.log(userData);
})
myApp.post('/login', function (req, res) {
    let loginUser = userData.find((user) => {
        return req.body.email === user.email && req.body.pass === user.pass;
    })
    res.json(loginUser);
})
myApp.use(function (err, req, res, next) {
    console.log(err);
})
myApp.listen(4040, function () {
    console.log('Form server')
})
myApp.get('/',function (req,res){
    res.end('hello world!');
})
