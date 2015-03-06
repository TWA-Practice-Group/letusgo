var express = require('express');
var router = express.Router();

var cartSchema = require('./modules/cartSchema.js');

router.get('/', function (req, res, next) {
  cartSchema.find(function (err, cartGoods) {
    if (err) return next(err);
    res.render('cart', {cart: cartGoods});
  });
});

module.exports = router;
