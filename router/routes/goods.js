var express = require('express');
var router = express.Router();

var Good = require('./model/goodModel');
var goodModel = require('./modules/goodsSchema');

router.get('/', function(req, res) {
    res.send(goodModel.get());

});

router.post('/', function(req, res){
    goodModel.create(req.body);
    res.send('add successful');
});

module.exports = router;

