var express = require('express');
var router = express.Router();

var cartSchema = require('../../model/cartSchema.js');

router.get('/', function (req, res, next) {
  cartSchema.find(function (err, cartItem) {
    if (err) return next(err);
    res.render('cart', {cart: cartItem});
  });
});

router.post('/', function (req, res) {

  cartModel.create(req.body);
  res.send('add successful');
});

module.exports = router;
