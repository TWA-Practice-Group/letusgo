'use strict';
requirejs.config({
  paths: {
    'jquery': 'jquery'
  }
});

require(['jquery'], function( $ ) {
    console.log( 'hello !' );
    
    $(document).ready(function(){

      $('#home').text('hello world!');
  });
});
