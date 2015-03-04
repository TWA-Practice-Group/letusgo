'use strict';

describe('helloWorld', function(){
    it('should return hello world!', function(){

        var helloWorld = require('helloWorld');
        expect(helloWorld()).to.equal('hello world!');
    });
});
