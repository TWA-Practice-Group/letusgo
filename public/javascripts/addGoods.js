require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
    }
});

require(['jquery'], function($, _){

    $(document).ready(function(){

        $('#emptyError').hide();

        $('a#cancel').on('click', function(){
            $(this).attr('href', '../../views/shopManagement.html');
        });

        $('a#save').on('click', function(){
            verifyInfo();
        });


        function verifyInfo(){
            var name = $('input#goodName').val();
            var unit = $('input#goodUnit').val();
            var price = $('input#goodPrice').val();

            var intergrated = name && unit && price;

            if(!intergrated){
                $('#emptyError').show();
            }else{

                $.post('/api/goods', {name: name, unit: unit, price: price}, function(){
                    $('#emptyError').hide();
                    $('a#save').attr('href', '../../views/shopManagement.html');
                });
            }
        }
    });
});

require(['jquery', 'semantic'], function (jquery, semantic) {
});
