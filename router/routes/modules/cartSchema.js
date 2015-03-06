'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var goods = require('./goodsSchema');

var cartSchema = Schema({
    goods:{type: Schema.Types.ObjectId, ref:'goods'},
    number: Number
});

var cart = mongoose.model('cart', cartSchema);

module.export = cart;
