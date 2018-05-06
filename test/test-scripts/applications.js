

'use-strict';

const chai = require('chai');
const assert = chai.assert;

describe('About page navigation and testing', function(){


    it('Should navigate to Kennings and verify URL', function(){
        browser.url('http://kennings-rent-to-own.net/');
        browser.url('http://kennings-rent-to-own.net/application-forms');
        isKenningsForms = browser.getUrl();
        assert.equal(isKenningsForms, 'http://kennings-rent-to-own.net/application-forms');
    });

    it('Should click on the about tab and verify its webpage', function(){
        title_field = browser.execute('return document.querySelector("input")');
        browser.execute('console.log(arguments[0].value)', title_field);
        browser.execute('console.log(arguments[0].value.value = "Dr")', title_field);
        first_field = browser.execute('return document.querySelector("input")');
        browser.execute('console.log(arguments[0].value)', first_field);
        browser.execute('console.log(arguments[0].value.value = "Bryan")', first_field);
        browser.pause(2000);
    
    });
});