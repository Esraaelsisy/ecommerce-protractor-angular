var protoCommercePage= require ("../pages/homePage")
var objDataProvider= require("../data/FormData");
var using = require('jasmine-data-provider');



describe ("Submit User Data" , function()
{
    
    // Function run before each test 
beforeEach(function()
{
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.driver.manage().window().maximize();

});

using (objDataProvider.FormData, function (data , description)
{
it ("User can submit his data successfully", function ()
{
    protoCommercePage.enterName(data.name);
    protoCommercePage.enterEmail(data.email);
    protoCommercePage.enterPassword(data.password);
    protoCommercePage.checkIceCreamLover();
    protoCommercePage.selectEmploymentStatus(data.employmentStatus);
    protoCommercePage.selectGender(data.gender)
    protoCommercePage.enterDateOfBirth(data.birthDate);
    protoCommercePage.clickSubmitBtn();
    protoCommercePage.verifyingSuccessMsg('The Form has been submitted successfully!');

});
});

it ("Name and Email are required fields" , function ()
{

    protoCommercePage.enterName('');
    protoCommercePage.enterEmail('');
    protoCommercePage.enterPassword('12345678');
    protoCommercePage.checkIceCreamLover();
    protoCommercePage.selectEmploymentStatus("Employed");
    protoCommercePage.enterDateOfBirth();
    protoCommercePage.clickSubmitBtn();
    protoCommercePage.verifyingSuccessMsg('The Form has been submitted successfully!');
    protoCommercePage.verifyingErrorMsgs(2 , 'Name and Email');
});

afterAll(function()
{
browser.quit ();
});

});


