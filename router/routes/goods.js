var express = require('express');
var router = express.Router();

var Good = require('./model/goodModel');

router.get('/', function(req, res) {
    res.send('hello world!');

});

router.post('/', function(req, res){
    var good = new Good(null, req.body.name, req.body.unit, req.body.price);

    console.log(req.body.name, req.body.unit, req.body.price);
    console.log(JSON.stringify(req.param('name')));

});

module.exports = router;

