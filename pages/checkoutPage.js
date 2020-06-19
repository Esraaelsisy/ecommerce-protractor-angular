var checkoutPage = function () {
    var checkoutSuccess_Btn = element(by.css('.btn-success'));
    // var continueShopping_Btn = element(by.cssContainingText('button', 'Continue Shopping'));
    var items_List = element.all(by.tagName('tr'));


    this.checkout = function () {
        checkoutSuccess_Btn.click();
    };

    this.continueShopping = function () {
        continueShopping.click();
    };

    this.verifyingItemNames = function (deviceNames) {
        deviceNames.forEach(function (deviceName) {
            expect(element(by.cssContainingText('a', deviceName)).isPresent()).toBe(true);
        });
    };

    this.verifyingItemPrice = function (deviceNames, devicePrices) {
        let i = 0;
        deviceNames.forEach(function (deviceName) {

            var actualPrice = element(by.cssContainingText('a', deviceName)).element(by.xpath('.//ancestor::tr/td[3]')).getText();
            expect(actualPrice).toContain(devicePrices[i]);
            i++;
            console.log('i =' + i);
        });
    };



    this.CalculatingTotal = function (deviceNames ,quantity) {
        var total=0;
        deviceNames.forEach(function () {
            var actualPrice = element(by.cssContainingText('a', deviceName)).element(by.xpath('.//ancestor::tr/td[3]')).getText();
            element(by.cssContainingText('css', deviceName)).element(by.xpath('.//ancestor::tr')).element(by.id('exampleInputEmail1')).sendKeys(5);
            var totalItemPrice = actualPrice*quantity
            expect(element(by.xpath('.//a[contains(text() ,"iphone")]/ancestor::tr/td[4]'))).toContain(totalItemPrice);
            total+= actualPrice;
        });

        expect().toEqual(total);

    };


}

module.exports = new checkoutPage;