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

    $('.deleteItem').on('click', function () {

      var id = this.id;
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

    $('.modifyGoods').on('click', function () {
      var id = this.id;
      $(location).attr('href', '/modifyGoods/' + id);
    })
  });
});
