'use strict';
var _ = require('lodash');
var mongoose = require('mongoose');

var goodsSchema = new mongoose.Schema({

  name: String,
  unit: String,
  price: Number
});

var goodsModel = mongoose.model('goods', goodsSchema);

goodsModel.postGood = function (name, unit, price) {

  goodHasexisted(name, unit, price);
};

function addNewGood(name, unit, price) {

  goodsModel.create({
    name: name,
    price: price,
    unit: unit
  });
}

function goodHasexisted(name, unit, price) {

  goodsModel.find(function (err, goods) {
    if (err) return next(err);

    var goodindex = _.findIndex(goods, function (eachGood) {
      return eachGood.name == name;
    });

    if (goodindex === -1) {
      addNewGood(name, unit, price);
    }
  });
}
module.exports = goodsModel;






