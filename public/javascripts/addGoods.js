require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery'
    }
});

require(['jquery'], function($, _){

    $(document).ready(function(){

        $('#emptyError').hide();
        $('#priceError').hide();


        $('a#cancel').on('click', function(){
            $(this).attr('href', 'shopManagement');
        });

        $('a#save').on('click', function(){
            verifyInfo();
        });


        function verifyInfo(){
            var name = $('input#goodName').val();
            var unit = $('input#goodUnit').val();
            var price = $('input#goodPrice').val();
            var name = $('input#goodName').val();

            var isIntergrated = name && unit && price;

            if (!isIntergrated) {
                $('#emptyError').show();
            } else {

                $.post('/api/goods', {name: name, unit: unit, price: price}, function () {
                    $('#emptyError').hide();
                    $('a#save').attr('href', 'shopManagement');
                });
            }
        }

        function saveNewGood(name, unit, price){

            $.post('/api/goods', {name: name, unit: unit, price: price})
                .success(function(){
                    $(location).attr('href','/shopManagement')
                });
        }

    });
});

