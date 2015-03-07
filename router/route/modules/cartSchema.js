'use strict';
var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  name: String,
  unit: String,
  price: Number,
  number: Number
});

module.exports = mongoose.model('cart', cartSchema);
