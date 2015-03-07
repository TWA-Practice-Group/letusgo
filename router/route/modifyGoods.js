var express = require('express');
var router = express.Router();

var goodModel = require('../../model/goodsSchema.js');

router.get('/', function (req, res) {
  res.render('modifyGoods');
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  goodModel.findById(id, function (err, goods) {
    if (err) {
      res.status(500).end();
    }
    if (goods == null) {
      res.status(400).end();
    }
    else {
      res.send(goods);
    }
  })
});

module.exports = router;
