
'use-strict';

const chai = require('chai');
const assert = chai.assert;

describe('About page navigation and testing', function(){


    it('Should navigate to Kennings and verify URL', function(){
        browser.url('http://www.kennings-rent-to-own.net');
        var isKennings = browser.getUrl();
        assert.equal(isKennings, 'http://kennings-rent-to-own.net/');
    });

    it('Should click on the about tab and verify its webpage', function(){
        browser.url('http://kennings-rent-to-own.net/faq');
        var isFaq = browser.getUrl();
        assert.equal(isFaq, 'http://kennings-rent-to-own.net/faq');
    });

    it('Should navigate through the tabs' , function(){
       browser.url('http://kennings-rent-to-own.net'); 
       var home_link= browser.execute('return document.querySelector("li#menu-item-486").querySelector("a")');
       browser.execute('arguments[0].value.click()', home_link);
       var aboutUs_link= browser.execute('return document.querySelector("li#menu-item-482").querySelector("a")');
       browser.execute('arguments[0].value.click()', aboutUs_link);
       var vehicles_link= browser.execute('return document.querySelector("li#menu-item-484").querySelector("a")');
       browser.execute('arguments[0].value.click()', vehicles_link);
       var application_form_link= browser.execute('return document.querySelector("li#menu-item-481").querySelector("a")');
       browser.execute('arguments[0].value.click()', application_form_link);
       var faq_link= browser.execute('return document.querySelector("li#menu-item-483").querySelector("a")');
       browser.execute('arguments[0].value.click()', faq_link);
       var contact_us_link= browser.execute('return document.querySelector("li#menu-item-485").querySelector("a")');
       browser.execute('arguments[0].value.click()', contact_us_link);

    });
});