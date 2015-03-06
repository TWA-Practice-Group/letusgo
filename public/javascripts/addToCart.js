'use strict';
require.config({
    baseUrl: './',
    paths:{
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