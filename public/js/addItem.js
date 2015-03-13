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

    $('a#save').on('click', function(){

      initBorder();
      initErrorBox();

      verifyInfo();
    });

    function initBorder(){

      document.getElementById('itemName').style.border = 'grey 1px solid';
      document.getElementById('itemUnit').style.border = 'grey 1px solid';
      document.getElementById('itemPrice').style.border = 'grey 1px solid';
    }

    function initErrorBox(){

      $('#emptyError').hide();
      $('#inputError').hide();
    }

    function verifyInfo() {

      var unit = $('input#itemUnit').val();
      var price = $('input#itemPrice').val();
      var name = $('input#itemName').val();

      var isIntergrated = name && unit && price;

      if (!isIntergrated) {
        $('#emptyError').show();

      } else {

        if(inputsIsRight(name, unit, price)){

          saveNewItem(name, unit, price);
        }else{
          $('#inputError').show();
        }
      }
    }

    function inputsIsRight(name, unit, price){
      if(!inputIsword(name)){
        //$('#itemName').attr('style', 'border：red 1px solid');
        document.getElementById('itemName').style.border = 'red 1px solid';
      }

      if(!inputIsword(unit)){
        document.getElementById('itemUnit').style.border = 'red 1px solid';
      }

      if(!priceIsNumber(price)){
        document.getElementById('itemPrice').style.border = 'red 1px solid';
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

    function saveNewItem(name, unit, price) {

      $.post('/api/item', {name: name, unit: unit, price: price})
        .success(function () {
          $(location).attr('href', '/shopManagement')
        });
    }

  });
});
