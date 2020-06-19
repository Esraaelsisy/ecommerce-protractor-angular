let shopPageObj = require('../pages/shopPage');
let homePageObj = require('../pages/homePage');
let checkoutPageObj = require('../pages/checkoutPage');

const { browser } = require('protractor');

describe('Shop Page Test Cases', function () {

    beforeEach(function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.driver.manage().window().maximize();
        homePageObj.openShopPage();

    });


    xit('User can add items to the cart', function () {

        shopPageObj.findDevice('Samsung Note 8');
        shopPageObj.addDevices(['Samsung Note 8', 'iphone X']);

    });


    it('Items names and prices are corrcetly calculated', function () {
        shopPageObj.findDevice('Samsung Note 8');
        shopPageObj.addDevices(['Samsung Note 8', 'iphone X']);
        shopPageObj.checkoutCart();
        checkoutPageObj.verifyingItemNames(['Samsung Note 8', 'iphone X']);
        checkoutPageObj.verifyingItemPrice(['Samsung Note 8'], ['85000']);
    });


});