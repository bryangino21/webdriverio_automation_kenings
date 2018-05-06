

'use-strict';

const chai = require('chai');
const assert = chai.assert;

describe('About page navigation and testing', function(){


    it('Should navigate to Kennings and verify URL', function(){
        browser.url('http://kennings-rent-to-own.net/contact-us');
        isKenningsContact = browser.getUrl();
        assert.equal(isKenningsContact, 'http://kennings-rent-to-own.net/contact-us');
    });

    it('Should click on the about tab and verify its webpage', function(){
        your_name = browser.execute('return document.querySelector("input[name=your-name]")');
        browser.execute('console.log(arguments[0].value)', your_name);
        browser.execute('console.log(arguments[0].value.value = "Bryan ")', your_name);
        browser.pause(1000);
        your_email = browser.execute('return document.querySelector("input[name=your-email]")');
        browser.execute('console.log(arguments[0].value.value = "bryangino20@hotmail.com ")', your_email);
        browser.pause(1000);
        your_subject = browser.execute('return document.querySelector("input[name=your-subject]")');
        browser.execute('console.log(arguments[0].value.value = "bryangino20@hotmail.com ")', your_subject);
        browser.pause(1000);
        your_message = browser.execute('return document.querySelector("textarea[name=your-message]")');
        browser.execute('console.log(arguments[0].value.value = "Hi Dr. Moody, I hope you have a great summer ")', your_message);
        browser.pause(1000);
        send_button = browser.execute('return document.querySelector("input[value=Send]")');
        console.log(send_button);
        browser.execute('console.log(arguments[0].value.click())', send_button);
        browser.pause(2000);

    });
});