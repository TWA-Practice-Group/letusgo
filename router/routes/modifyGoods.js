var express = require('express');
var router = express.Router();

var goodModel = require('./modules/goodsSchema.js');

router.get('/', function(req, res) {
    res.render('modifyGoods');
});


module.exports = router;