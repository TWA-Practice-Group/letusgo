'use strict';

require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});

require(['jquery', 'semantic'], function ($) {

    $(document).ready(function () {

        $('#emptyError').hide();
        $('#priceError').hide();

        $('a#cancel').on('click', function () {

            $(this).attr('href', '/shopManagement');
        });

        $('a#save').on('click', function () {
            verifyInfo();
        });

        function verifyInfo(){
            var unit = $('input#goodUnit').val();
            var price = $('input#goodPrice').val();
            var name = $('input#goodName').val();

            var isIntergrated = name && unit && price;

            if (!isIntergrated) {
                $('#emptyError').show();
            } else {

                $('#emptyError').hide();
                priceIsNumber(name, unit, price);
            }
        }

        function priceIsNumber(name, unit, price){

            var reg = /^\d+(\.\d+)?$/;

            var  priceIsNumber = reg.exec(price);

            if(!priceIsNumber){

                $('#priceError').show();
            }else{

                $('#priceError').hide();
                saveNewGood(name, unit, price);
            }
        }

        function saveNewGood(name, unit, price){

            $.post('/api/goods', {name: name, unit: unit, price: price});
            $('a#save').attr('href', '/shopManagement');

        }

    });
});

