var require = require('require.js');

require.cofig({
    paths:{
        'jquery': '../../bower_components/jquery/dist/jquery.js',
        'semantic': '../../bower_components/semantic-ui/dist/semantic.js'
    }
});

require(['jquery', 'semantic'], function (jquery, semantic){

});
