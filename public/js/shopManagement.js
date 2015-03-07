'use strict';
require.config({
  baseUrl: './',
  paths: {
    'jquery': './jquery/dist/jquery',
    'semantic': './semantic-ui/dist/semantic',
  }
});

require(['semantic', 'jquery'], function (semantic, $) {

  $(document).ready(function () {

    $('.deleteGoods').on('click', function () {

      var id = this.closest('td').id;

      var $this = $(this);
      $.ajax({

        url: '/api/goods/' + id,
        type: 'DELETE',
        success: function (data) {

          if (200 == data.status) {

            $this.closest('tr').remove();
          }
        }
      });
    });
  });
});
