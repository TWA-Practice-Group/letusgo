var express = require('express');
var router = express.Router();

var goodModel = require('./modules/goodsSchema.js');

router.get('/', function(req, res, next) {
    goodModel.find(function (err, goods) {
        if (err) return next(err);
        res.render('modifyGoods',{goods:goods});
    });
});

module.exports = router;