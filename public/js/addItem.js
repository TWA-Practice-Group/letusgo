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

      $('#itemName').css('border',"grey 1px solid");
      $('#itemUnit').css('border',"grey 1px solid");
      $('#itemPrice').css('border',"grey 1px solid");
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

      if(!inputIsWord(name)){
        $('#itemName').css('border',"red 1px solid");
      }

      if(!inputIsWord(unit)){

        $('#itemUnit').css('border',"red 1px solid");
      }

      if(!priceIsNumber(price)){

        $('#itemPrice').css('border',"red 1px solid");
      }

      return inputIsWord(name) && inputIsWord(unit) && priceIsNumber(price);
    }

    function inputIsWord(word){

      var trimedWord = word.trim();

      return trimedWord.length > 0;
    }

    function priceIsNumber(price){

      var reg = /^\d+(\.\d+)?$/;
      return reg.exec(price);
    }

    function saveNewItem(name, unit, price) {

      $.post('/api/item', {name: name.trimLeft(), unit: unit.trimLeft(), price: price.trimLeft()})
        .success(function () {
          $(location).attr('href', '/shopManagement')
        });
    }
  });
});
