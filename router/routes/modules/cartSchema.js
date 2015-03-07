'use strict';
var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  goodsId: String,
  number: Number
});

var cart = mongoose.model('cart', cartSchema);

module.exports = cart;
