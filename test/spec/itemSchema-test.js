'use strict';

var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

describe('ItemSchema', function() {

  var ItemModel, mongoose, items;

  beforeEach(function() {
    ItemModel = require('../../model/itemSchema.js');
    mongoose = require('mongoose');
    items = [{name: 'apple', unit: 'kg', price: 10.0},
             {name: 'pear', unit: 'kg', price: 19.0}
    ]
  });

  //describe('postItem', function() {
  //
  //  it('should add new item to mongodb', function () {
  //    var postItem = sinon.spy(ItemModel, 'postItem');
  //
  //    var callback = function() {
  //      return items;
  //    };
  //    var stub = sinon.stub(ItemModel, 'find', callback);
  //
  //    ItemModel.postItem('apple', 'kg', 10.0);
  //
  //    expect(postItem).to.have.been.calledWith('apple', 'kg', 10.0);
  //    stub();
  //  });
  //});

  describe('', function () {

    it('should add new item to mongodb', function () {
      var postItem = sinon.spy(ItemModel, 'postItem');

      var callback = function() {
        return items;
      };
      var find = sinon.stub(ItemModel, 'find', callback);

      ItemModel.postItem('耳机', '副', 90.0);

      expect(postItem).to.have.been.calledWith('耳机', '副', 90.0);
      find();

      var create = sinon.stub(ItemModel, 'create');
      create.withArgs('耳机', '副', 90.0);
    })
  });

  describe('updateItem', function() {

    it('should update item to mongodb', function() {
      var spy = sinon.spy(ItemModel, 'updateItem');
      var callback = sinon.spy();
      ItemModel.updateItem('1', 'apple', 'kg', 10.0, callback);

      expect(spy).to.have.been.calledWith('1', 'apple', 'kg', 10.0, callback);
    })
  });
});
