var express = require('express');
var router = express.Router();

var Cart = require('../../model/cartSchema');
var Item = require('../../model/ItemSchema');
router.get('/', function (req, res) {

  Cart.find()
    .populate('itemId', 'name unit price', null)
    .exec(function(err, cartItem) {
      res.render('cart',{cartItems:cartItem});
    });
});

router.post('/', function (req) {
  var id = req.body.id;
  Cart.create({itemId: id, number: 1});
});

module.exports = router;
