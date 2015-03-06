'use strict';
require.config({
  baseUrl: './',
  paths: {
    'jquery': './jquery/dist/jquery',
    'semantic': './semantic-ui/dist/semantic'
  }
});
require(['semantic', 'jquery'], function (semantic, $) {

  $(document).ready(function () {

    $('.deleteItem').on('click', function () {
      console.log(this.id);
      $.ajax({
        url: '/api/goods/' + this.id,
        type: 'DELETE',
        success: function (result) {
          // Do something with the result
        }
      });
    });
  });
});
