var express = require('express');
var router = express.Router();

var Good = require('../../model/goodsSchema');

router.get('/', function (req, res, next) {

  Good.find(function (err, goods) {
    if (err) return next(err);
    res.send(goods);
  });
});

router.post('/', function (req, res) {

  //var good = new Good(null, req.body.name, req.body.unit, req.body.price);
  Good.postGood(req.body.name, req.body.unit, req.body.price);

  res.send({
    status: 200,
    info: 'add successful',
    data: {}
  });
});

router.delete('/:id', function (req, res) {

  var id = req.params.id;
  var result;

  Good.remove({_id: id}, function (err) {

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

module.exports = router;
