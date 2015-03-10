var express = require('express');
var router = express.Router();

var Cart = require('../../model/cartSchema.js');

router.get('/', function (req, res) {

  Cart.find()
    .populate('itemId', 'name unit price', null)
    .exec(function(err, cartItems) {
      res.render('cart',{cartItems:cartItems});
    });
});


module.exports = router;
