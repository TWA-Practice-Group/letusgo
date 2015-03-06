var express = require('express');
var router = express.Router();

var Cart = require('./modules/cartSchema.js');
var goods = require('./modules/goodsSchema');

//
Cart.find(function () {

    }).populate('goods')
    .exec(function (err, data) {
        console.log('cart');
    });
router.get('/', function (req, res) {

    Cart.find(function (err, cart) {

        if (err) return next(err);
        res.send(cart);
    });
});

router.post('/', function (req, res) {

    Cart.create(req.body);
    res.send('add successful');
});

function add(err) {
    if (err) throw err;
    Cart.goods.push(goods._id);
    number: 1;
    lucy.save(cb1);
}
module.exports = router;

