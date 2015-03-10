var express = require('express');
var router = express.Router();

var Cart = require('../../model/cartSchema');
var Goods = require('../../model/goodsSchema');
router.get('/', function (req, res) {

  Cart.find()
    .populate('goodsId', 'name unit price', null)
    .exec(function(err, docs) {
      console.log('099999999');
      console.log(docs[0].goodsId.name); // post-by-aikin
      res.send(docs[0].goodsId.name);
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
