var express = require('express');
var router = express.Router();

var goodModel = require('./modules/goodsSchema.js');

router.get('/:id', function(req, res) {
    var id = req.params.id;
    goodModel.findById(id, function(err, goods){
        if (err) return next(err);
        res.render('modifyGoods', {goods:goods});
    });
});


module.exports = router;