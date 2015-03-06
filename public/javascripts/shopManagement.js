'use strict';
require.config({
    baseUrl: './',
    paths:{
        'jquery': './jquery/dist/jquery',
        'semantic': './semantic-ui/dist/semantic',
    }
});

require(['semantic', 'jquery', 'shopManagement'], function(semantic, $) {

    $(document).ready(function () {

        $('.deleteItem').on('click', function () {

            var $this = $(this);
            $.ajax({
                
                url: '/api/goods/' + $this.id,
                type: 'DELETE',
                success: function(data){

                    if(200 == data.status) {

                        $this.closest('tr').remove();
                    }
                }
            });
        });
    });
});
