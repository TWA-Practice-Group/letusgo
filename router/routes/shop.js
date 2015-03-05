var express = require('express');
var router = express.Router();
var helloWorld = require('./modules/helloWorld.js');

router.get('/', function(req, res) {
    res.send(helloWorld());

});

module.exports = router;
