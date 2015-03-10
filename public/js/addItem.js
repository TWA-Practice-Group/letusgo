'use strict';

require.config({
  baseUrl: './',
  paths: {
    'jquery': './jquery/dist/jquery',
    'semantic': './semantic-ui/dist/semantic'
  }
});

require(['jquery', 'semantic'], function ($) {

  $(document).ready(function () {

    $('#emptyError').hide();
    $('#priceError').hide();

    $('a#save').on('click', verifyInfo);

    function verifyInfo() {
      var unit = $('input#itemUnit').val();
      var price = $('input#itemPrice').val();
      var name = $('input#itemName').val();

      var isIntergrated = name && unit && price;

      if (!isIntergrated) {
        $('#emptyError').show();
      } else {
        $('#emptyError').hide();
        priceIsNumber(name, unit, price);
      }
    }

    function priceIsNumber(name, unit, price) {

      var reg = /^\d+(\.\d+)?$/;

      var priceIsNumber = reg.exec(price);

      if (!priceIsNumber) {

        $('#priceError').show();
      } else {

        $('#priceError').hide();
        saveNewItem(name, unit, price);
      }
    }

    function saveNewItem(name, unit, price) {

      $.post('/api/item', {name: name, unit: unit, price: price})
        .success(function () {
          $(location).attr('href', '/shopManagement')
        });
    }

  });
});
