'use strict';

var _ = require('lodash');
var Good = (function(){

    function Good(id, name, unit, price){
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
    }

    function addNewGood(name, unit, price){

        goodsSchema.create({
            name: name,
            price: price,
            unit: unit
        });
    }

    function goodHasexisted(name, unit, price){

        goodsSchema.find(function(err, goods){
            if (err) return next(err);

            var goodindex = _.findIndex(goods, function(eachGood) {
                return eachGood.name == name;
            });

            if(goodindex === -1){
                addNewGood(name, unit, price);
            }
        });
    }

    Good.prototype.postGood = function() {
        goodHasexisted(this.name, this.unit, this.price);
    };

    return Good;
})();

module.exports = Good;
