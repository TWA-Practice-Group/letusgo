'use strict';

var _ = require('lodash');
var connect = require('../modules/goodsSchema.js');

var Good = (function(){

    function Good(id, name, unit, price){
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
    }

    Good.prototype.deleteById = function(id) {

    };

    return Good;
})();

module.exports = Good;
