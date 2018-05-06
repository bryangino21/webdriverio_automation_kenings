

'use-strict';

const chai = require('chai');
const assert = chai.assert;

describe('About page navigation and testing', function(){


    it('Should navigate to Kennings and verify URL', function(){
        browser.url('http://www.kennings-rent-to-own.net');
        isKennings = browser.getUrl();
        assert.equal(isKennings, 'http://kennings-rent-to-own.net/');
    });

    it('Should click on the about tab and verify its webpage', function(){
        browser.url('http://kennings-rent-to-own.net/faq');
        isFaq = browser.getUrl();
        assert.equal(isFaq, 'http://kennings-rent-to-own.net/faq');
    });

});