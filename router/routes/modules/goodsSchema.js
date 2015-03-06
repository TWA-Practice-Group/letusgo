'use strict';

var mongoose = require('mongoose');
var goodsSchema = new mongoose.Schema({

    name: String,
    unit: String,
    price: Number
});

module.exports = mongoose.model('goods', goodsSchema);