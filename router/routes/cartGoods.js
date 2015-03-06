var express = require('express');
var router = express.Router();

var Cart = require('./modules/cartSchema');
var goods = require('./modules/goodsSchema');

router.post('/', function (req, res) {


    var id = req.body.id;
   Cart.create({goodsId: id, number: 1});

   res.send('add successful');
});

module.exports = router;

