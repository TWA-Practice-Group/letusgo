var express = require('express');
var router = express.Router();

var Good = require('./model/goodModel');

router.get('/', function(req, res) {

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
    var good = new Good(null, req.body.name, req.body.unit, req.body.price);

    console.log(req.body.name, req.body.unit, req.body.price);
    console.log(JSON.stringify(req.param('name')));

        res.send('delete success!');
    });

module.exports = router;

