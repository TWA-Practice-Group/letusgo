var express = require('express');
var router = express.Router();

var Good = require('./model/goodModel');
var goodModel = require('./modules/goodsSchema');

router.get('/', function(req, res) {

    res.send(goodModel.get());

    goodModel.find(function(err, goods){
        if (err) return next(err);
        res.send(goods);
    });
});

router.post('/', function(req, res) {

    var good = new Good(null, req.body.name, req.body.unit,req.body.price);
    good.postGood();

    res.send({
        status: 200,
        info: 'add successful',
        data: {}
    });
});

router.post('/', function(req, res){

    goodModel.create(req.body);
    res.send('add successful');
});

module.exports = router;

