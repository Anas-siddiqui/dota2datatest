
var express = require('express');
var path = require('path');
var morgan = require('morgan');



var app = express();

// view engine setup

// Simple Express app made by express generator
// Extra code has been removed


app.use(morgan('dev'));

//Declaring public folders for files

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/'));





//Declaring two GET methods to response back with our html file
//here our goal is to make the matches page as home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/main.html'));
});


module.exports = app;
