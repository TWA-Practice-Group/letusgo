'use strict';
var mongoose = require('mongoose');
var Item = require('./itemSchema');

var cartSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
  number: Number
});

module.exports = mongoose.model('carts', cartSchema);
