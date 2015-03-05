'use strict';
require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});
require(['semantic', 'jquery'], function( semantic, $ ) {

    $(document).ready(function () {

        $('.deleteItem').on('click', function (event) {
            console.log(event.target.id);
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
