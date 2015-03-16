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

    $('.save').on('click', verifyInfo);

    function verifyInfo() {
      var id = this.id;
      var name = $('input#itemName').val();
      var unit = $('input#itemUnit').val();
      var price = $('input#itemPrice').val();

      var isIntergrated = name && unit && price;

      if (!isIntergrated) {
        $('#emptyError').show();
      } else {
        if(inputsIsRight(name, unit, price)){

          updateItem(id, name, unit, price);

        }else{

          $('#inputError').show();
        }
      }
    }

    function inputsIsRight(name, unit, price){
      if(!inputIsword(name)){
        $('#itemName').css('border', 'red 1px solid');
      }

      if(!inputIsword(unit)){
        $('#itemUnit').css('border', 'red 1px solid');
      }

      if(!priceIsNumber(price)){
        $('#itemPrice').css('border', 'red 1px solid');
      }

      var inputsIsRight = inputIsword(name) && inputIsword(unit) && priceIsNumber(price);

      return inputsIsRight;
    }

    function inputIsword(word){

      var reg = /^\s/;
      return !reg.exec(word);
    }

    function priceIsNumber(price){

      var reg = /^\d+(\.\d+)?$/;
      return reg.exec(price);
    }


    function updateItem(id, name, unit, price) {

      $.ajax({

        url: '/api/item/' + id,
        type: 'PUT',
        data: {_id: id, name: name, unit: unit, price: price},

        success: function (data) {
          if (200 == data.status) {
                $(location).attr('href', '/shopManagement')
          }
        }
      });
    }

  });
});

