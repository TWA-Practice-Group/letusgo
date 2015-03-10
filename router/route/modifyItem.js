var express = require('express');
var router = express.Router();

var itemModel = require('../../model/itemSchema.js');

router.get('/:id', function (req, res, next) {

  var id = req.params.id;

  itemModel.findById(id, function (err, item) {
    if(err) return next(err);
    res.render('modifyItem', {item:item});
  })

});

module.exports = router;
