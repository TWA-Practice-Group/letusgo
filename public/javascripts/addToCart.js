'use strict';
require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic'
    }
});

require(['jquery', 'semantic'], function($, ui ) {

    $(document).ready(function () {

        $('.buy').on('click', function () {
            addToCart();
        });

        function addToCart(){

        }
    });
});