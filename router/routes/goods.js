
var express = require('express');
var router = express.Router();

var goodModel = require('./modules/goodsSchema.js');
var Good = require('./models/good.js');

router.get('/', function(req, res) {

  goodModel.find(function(err, goods){
    if (err) return next(err);
    res.send(goods);
  });
});

router.post('/', function(req, res) {

  var good = new Good(null, req.body.name, req.body.unit,req.body.price);
  good.postGood();

  res.send({
    status: 200,
    info: 'add successful',
    data: {}
  });
});

router.delete('/:id', function(req, res) {

    var id = req.params.id;
    var result;

    goodModel.remove({_id: id}, function (err) {

        if(err) {

            result = {
                status: 400
            }
        }  else {

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
