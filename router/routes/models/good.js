'use strict';

var _ = require('lodash');
var goodsSchema = require('../modules/goodsSchema.js');

var Good = (function(){

    function Good(id, name, unit, price){
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
    }


    function goodHasexisted(name){

        goodsSchema.find(function(err, goods){
            if (err) return next(err);

            var goodHasexisted = _.findIndex(goods, function(eachGood) {
                return eachGood.name == name;
            });

            if(!goodHasexisted){
                addNewGood();
            }
        });
    }

    Good.prototype.postGood = function() {

        goodHasexisted(this.name), this.unit, this.price);
    };

    return Good;
})();

module.exports = Good;
