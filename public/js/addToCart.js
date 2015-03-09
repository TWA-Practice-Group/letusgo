'use strict';
require.config({
  baseUrl: './',
  paths: {
    'jquery': './jquery/dist/jquery',
    'semantic': './semantic-ui/dist/semantic'
  }
});

require(['jquery', 'semantic'], function ($) {

  $(document).ready(function () {

    $('.buy').on('click', function () {
      var id = this.id;

      $.ajax({
        url: '/api/cartGoods/',
        type: 'POST',
        data: {id: id},
        success: function (result) {
          // Do something with the result
        }
      });
    });
  });
});
