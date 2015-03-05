var express = require('express');
var router = express.Router();

var goodModel = require('./modules/goodsSchema.js');

router.get('/', function(req, res) {

    goodModel.find(function(err, goods){

        if (err) return next(err);
        res.send(JSON.parse(goods));
    });
});

router.post('/', function(req, res){

    goodModel.create(req.body);
    res.send('add successful');
});

module.exports = router;

