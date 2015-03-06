'use strict';

require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});

require(['jquery', 'semantic'], function ($, semantic) {


    $(document).ready(function () {

        $(document).ready(function () {

            $('a#cancel').on('click', function () {

                $(this).attr('href', '/shopManagement');
            });
            $('a#save').on('click', function () {
                verifyInfo();
            });

            function verifyInfo() {
                var name = $('input#goodName').val();
                var unit = $('input#goodUnit').val();
                var price = $('input#goodPrice').val();

            var priceIsNumber = priceIsNumber();

            if (!isIntergrated) {
                $('#emptyError').show();
            } else {

                if (!isIntergrated) {
                    $('#emptyError').show();
                } else {

                    $.post('/api/goods', {name: name, unit: unit, price: price}, function () {
                        $('#emptyError').hide();
                        $('a#save').attr('href', '/shopManagement');
                    });
                }
            }
        })
    })

            function isIntergrated(){

                var unit = $('input#goodUnit').val();
                var price = $('input#goodPrice').val();
                var name = $('input#goodName').val();

                return name && unit && price;
            }

            function priceIsNumber(){

                var reg = /^\d+(\.\d+)?$/;
                var price = $('input#goodPrice').val();

                return reg.exec(price);
            }


        }

    });
});

