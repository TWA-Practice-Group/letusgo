var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //res.send("hello world!");
    res.render('shopManagement');
});


module.exports = router;
