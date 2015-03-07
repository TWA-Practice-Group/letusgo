'use strict';
require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});


require(['jquery', 'semantic-ui'], function( $ ) {

    $(document).ready(function () {

        $('#deleteItem').on('click', function () {
            $.ajax({
                url: './api/goods',
                type: 'delete',
                data: 'id',
                async: false, //默认为true 异步
                error: function () {
                    alert('error');
                },
                success: function (data) {
                    $("#" + divs).html(data);
                }
            });

        });
    });
});
