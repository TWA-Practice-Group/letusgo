var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var connect = require('../../model/ItemSchema.js');

router.get('/', function (req, res, next) {

  connect.find(function (err, goods) {

    if (err) return next(err);
    res.render('shopManagement', {goods: goods});
  });
});

module.exports = router;
