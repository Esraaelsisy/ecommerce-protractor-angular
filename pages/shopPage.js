const { browser } = require("protractor");

let shopPage = function () {
    let checkout_Btn = element(by.cssContainingText('a', 'Checkout'));

    this.findDevice = function (deviceName) {
        element(by.cssContainingText('a', deviceName));
    };

    this.addDevices = function (deviceNames) {
        deviceNames.forEach(function (device) {
            var device_name = element(by.cssContainingText('a', device));
            var card_data = device_name.element(by.xpath('.//ancestor::app-card'));
            var add_Btn = card_data.element(by.css('.btn-info'));
            add_Btn.click();
        });
    };

    this.checkoutCart = function () {
        checkout_Btn.click();

    }

    this.verifyingCheckoutCount = function () {
        console.log(checkout_Btn.getText());

    };


};

module.exports = new shopPage;