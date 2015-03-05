var express = require('express');
var router = express.Router();

var cartModel = require('./modules/cartSchema.js');

router.get('/', function(req, res) {

    cartModel.find(function(err, goods){

        if (err) return next(err);
        res.send(JSON.parse(goods));
    });
});

router.post('/', function(req, res){

    cartModel.create(req.body);
    res.send('add successful');
});

module.exports = router;

