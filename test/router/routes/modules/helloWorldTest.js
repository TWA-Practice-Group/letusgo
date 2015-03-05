'use strict';

var BaseUrl = '../../../../router/routes/modules';

describe('helloWorld', function(){
    it('should return hello world!', function(){
        var helloWorld = require(baseUrl + '/helloWorld');
        expect(helloWorld()).to.equal('hello world!');
    });
});
