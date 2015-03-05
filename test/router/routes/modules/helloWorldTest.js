'use strict';

var chai = require('chai');
global.expect = chai.expect;

var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var baseUrl = '../../../../router/routes/modules';

describe('helloWorld', function(){
    it('should return hello world!', function(){
        var helloWorld = require(baseUrl + '/helloWorld');
        expect(helloWorld()).to.equal('hello world!');
    });
});
