'use strict';
var _ = require('lodash');
var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({

  name: String,
  unit: String,
  price: Number
});

var itemModel = mongoose.model('item', itemSchema);

itemModel.postItem = function (name, unit, price) {

  itemHasexisted(name, unit, price);
};

function addNewItem(name, unit, price) {

  itemModel.create({
    name: name,
    price: price,
    unit: unit
  });
}

function itemHasexisted(name, unit, price) {

  itemModel.find(function (err, items) {
    if (err) return next(err);

    var itemIndex = _.findIndex(items, function (eachItem) {
      return eachItem.name == name;
    });

    if (itemIndex === -1) {
      addNewItem(name, unit, price);
    }
  });
}
module.exports = itemModel;






