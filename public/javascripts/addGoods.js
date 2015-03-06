'use strict';

require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});

require(['jquery', 'semantic'], function ($, semantic){

    $(document).ready(function () {

        $('a#cancel').on('click', function () {
            $(this).attr('href', '/shopManagement');
        });

        $('a#save').on('click', function () {
            verifyInfo();
        });

    });
        var name = $('input#goodName').val();
        var unit = $('input#goodUnit').val();
        var price = $('input#goodPrice').val();

        var intergrated = name && unit && price;

        if (!intergrated) {
            $('#emptyError').show();
        } else {

            $.post('/api/goods', {name: name, unit: unit, price: price}, function () {
                $('#emptyError').hide();
                $('a#save').attr('href', 'shopManagement');
            });
        }
    }
