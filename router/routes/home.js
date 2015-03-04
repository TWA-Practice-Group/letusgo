var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //res.send("hello world!");
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

module.exports = router;
