'use strict';
require.config({
  baseUrl: '../',
  paths: {
    'jquery': './jquery/dist/jquery',
    'semantic': './semantic-ui/dist/semantic',
  }
});

require(['semantic', 'jquery'], function (semantic, $) {

  $(document).ready(function () {

    $('#emptyError').hide();
    $('#priceError').hide();

    $('.save').on('click', verifyInfo);

    function verifyInfo() {
      var id = this.id;
      var name = $('input#goodName').val();
      var unit = $('input#goodUnit').val();
      var price = $('input#goodPrice').val();

      var isIntergrated = name && unit && price;

      if (!isIntergrated) {
        $('#emptyError').show();
      } else {
        $('#emptyError').hide();
        priceIsNumber(id, name, unit, price);
      }
    }

    function priceIsNumber(id, name, unit, price) {

      var reg = /^\d+(\.\d+)?$/;

      var priceIsNumber = reg.exec(price);

      if (!priceIsNumber) {

        $('#priceError').show();
      } else {

        $('#priceError').hide();
        updateGoods(id, name, unit, price);
      }
    }

    function updateGoods(id, name, unit, price) {
      $.post('/api/goods/'+id, {_id: id, name: name, unit: unit, price: price})
        .success(function () {
          $(location).attr('href', '/shopManagement')
        });
    }

  });
});

