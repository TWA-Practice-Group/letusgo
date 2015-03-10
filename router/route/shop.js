var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../../model/itemSchema.js');

router.get('/', function (req, res, next) {
  Item.find(function (err, items) {
    if (err) return next(err);
    res.render('shop', {items: items});
  });
});

module.exports = router;
