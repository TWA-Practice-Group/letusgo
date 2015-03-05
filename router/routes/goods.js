var express = require('express');
var router = express.Router();

var goodModel = require('./modules/goodsSchema.js');

router.get('/', function(req, res) {

    goodModel.find(function(err, goods){
        if (err) return next(err);
        res.send(goods);
    });
});

router.post('/', function(req, res) {

    goodModel.create(req.body);
    res.send('add successful');
});

router.delete('/:id', function(req, res) {

    var id = req.params.id;
    goodModel.remove({_id: id}, function () {
        
        res.send('delete success!');
    });
});

module.exports = router;