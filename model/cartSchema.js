'use strict';
var mongoose = require('mongoose');
var Goods = require('./goodsSchema');

var cartSchema = new mongoose.Schema({
  goodsId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goods'
  },
  number:Number
});

module.exports = mongoose.model('cart', cartSchema);
