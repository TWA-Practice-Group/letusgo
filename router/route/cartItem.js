var express = require('express');
var router = express.Router();

var Cart = require('../../model/cartSchema');
router.get('/', function (req, res) {

  Cart.find({})
    .populate('itemId', 'name unit price', null)
    .exec(function(err, cartItem) {
      console.log(cartItem[0]);
      console.log(cartItem[0].itemId.name); // post-by-aikin
      res.send(cartItem[0].itemId.name);
    });

  //Cart.find(function (err, cart) {
  //
  //  if (err) return next(err);
  //  res.send(cart);
  //});
});

router.post('/', function (req, res) {
  var id = req.body.id;
  Cart.create({itemId: id, number: 1});
});

module.exports = router;
