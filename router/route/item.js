var express = require('express');
var router = express.Router();

var Item = require('../../model/ItemSchema');

router.get('/', function (req, res, next) {

  Item.find(function (err, items) {
    if (err) return next(err);
    res.send(items);
  });
});

router.post('/', function (req, res) {

  Item.postItem(req.body.name, req.body.unit, req.body.price);

  res.send({
    status: 200,
    info: 'add successful',
    data: {}
  });
});

router.delete('/:id', function (req, res) {

  var id = req.params.id;
  var result;

  Item.remove({_id: id}, function (err) {

    if (err) {

      result = {
        status: 400
      }
    } else {

      result = {
        status: 200,
        info: 'delete successful',
        data: {}
      }
    }

    res.send(result);
  });
});

router.post('/:id', function (req, res) {
  var id = req.params.id;
  var result;

  Item.updateItem(id, req.body.name, req.body.unit, req.body.price, function (err) {
    if (err) {
      result = {
        status: 400
      }
    } else {
      result = {
        status: 200,
        info: 'update successful',
        data: {}
      }
    }

    res.send(result);
  });
});

module.exports = router;
