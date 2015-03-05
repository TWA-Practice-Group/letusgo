'use strict';

var _ = require('lodash');

var Good = (function(){

    function Good(name, unit, price){
        this.name = name;
        this.unit = unit;
        this.price = price;
    }

    Good.prototype.isDead = function() {
        return this.hp <= 0;
    };

    return Good;
})();

module.exports = Good;