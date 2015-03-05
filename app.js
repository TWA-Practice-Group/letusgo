var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

// uncomment after placing your favicon in /public

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//app.use(cookieParser());

//connect to database
mongoose.connect('mongodb://localhost/letusgo', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// development settings
if (app.get('env') === 'development') {

    // This will change in production since we'll be using the dist folder
    //app.use(express.static(path.join(__dirname, '../client')));
    //// This covers serving up the index page
    //app.use(express.static(path.join(__dirname, '../client/.tmp')));
    //app.use(express.static(path.join(__dirname, '../client/app')));

    app.use(express.static(path.join(__dirname, './public')));
    app.use(express.static(path.join(__dirname, './bower_components')));
    app.use(express.static(path.join(__dirname, './.tmp')));

    // development error handler
    // will print stacktrace
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production settings
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

// routes
var router = require('./router')(app);

module.exports = app;




