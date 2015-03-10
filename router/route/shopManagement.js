var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var connect = require('../../model/ItemSchema.js');

router.get('/', function (req, res, next) {

  connect.find(function (err, items) {

    if (err) return next(err);
    res.render('shopManagement', {items: items});
  });
});

module.exports = router;
