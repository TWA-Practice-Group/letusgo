var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var goods = mongoose.model('goods', { name: String, price: Number, unit: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
});


router.get('/', function(req, res) {
    //res.send("hello world!");
    res.render('shopManagement');
});


module.exports = router;