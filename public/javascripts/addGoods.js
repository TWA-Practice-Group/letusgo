//require.config({
//    baseUrl: '../../'
//    //paths:{
//    //    'jquery': '../bower_components/jquery/dist'
//    //}
//});

//require(['jquery/dist/jquery'], function($){
//
//    $("document").ready(function(){
//
//        $('a#cancel').on('click', function(){
//            $(this).attr('href', '../../views/shopManagement.html');
//        });
//
//        $('a#save').on('click', savaGood());
//    });
//});

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
            console.log(name+unit+price);
            $.post('/api/goods', {name:, unit:, price:}, function(){

                $('#emptyError').hide();
                $('a#save').attr('href', '../../views/shopManagement.html');
            });
        }
    }
});

require(['jquery', 'semantic'], function (jquery, semantic) {
}
