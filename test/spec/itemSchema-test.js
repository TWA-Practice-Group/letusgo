'use strict';

var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
chai.use(sinonChai);

describe('ItemSchema', function() {

  var ItemModel;

  beforeEach(function() {
    ItemModel = require('../../model/itemSchema.js');
  });

  describe('postItem', function() {

    it('should add new item to mongodb', function () {
      var postItem = sinon.spy(ItemModel, 'postItem');

      ItemModel.postItem('apple', 'kg', 10.0);
      expect(postItem).to.have.been.calledWith('apple', 'kg', 10.0);
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
