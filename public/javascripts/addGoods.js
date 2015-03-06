'use strict';

require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});

require(['jquery', 'semantic'], function($, semantic) {

    $(document).ready(function () {

        $('#emptyError').hide();

        $('a#cancel').on('click', function () {

            $(this).attr('href', '/shopManagement');
        });
        $('a#save').on('click', function () {
            verifyInfo();
        });
    });

});
    function verifyInfo() {
        var name = $('input#goodName').val();
        var unit = $('input#goodUnit').val();
        var price = $('input#goodPrice').val();


        var isIntergrated = name && unit && price;

        if (!isIntergrated) {
            $('#emptyError').show();
        } else {

            priceIsNumber(name, unit, price);
                $('#emptyError').hide();
                priceIsNumber(name, unit, price);
            }
        if(!priceIsNumber){
            $('#emptyError').show();
        }else{
            saveNewGood(name, unit, price);
            if(!priceIsNumber){

                $('#priceError').show();
            }else{

                $('#priceError').hide();
                saveNewGood(name, unit, price);
            }
        }
    }

    function saveNewGood() {

        $.post('/api/goods', {name: name, unit: unit, price: price})
            .success(function () {

                $('#emptyError').hide();
                $('a#save').attr('href', '/shopManagement');
            });
    }

