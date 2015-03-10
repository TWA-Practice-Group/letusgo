var express = require('express');
var router = express.Router();

var Cart = require('../../model/cartSchema');
var Item = require('../../model/itemSchema');
//router.get('/', function (req, res) {
//
//  Cart.find()
//    .populate('itemId', 'name unit price', null)
//    .exec(function(err, cartItem) {
//      res.render('cart',{cartItems:cartItem});
//    });
//});

//router.get('/:id', function(req, res){
//  var id = req.params.id;
//
//  Cart.findById(id, function (err, cartItem) {
//    if(cartItem != null){
//      cartItem.number += 1;
//    }
//  })
//});
router.post('/', function (req) {
  var id = req.body.id;
  Cart.create({itemId: id, number: 1});
});

module.exports = router;
