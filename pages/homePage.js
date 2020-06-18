let protoCommercePage = function()
{
    //Locating Page Elements

    let name_txtField = element.all(by.name('name'));
    let email_txtField=element(by.name('email'));
    let password_txtField = element(by.id('exampleInputPassword1'));
    let iceCream_checkBox=element(by.id('exampleCheck1'));
    let gender_List = element(by.id('exampleFormControlSelect1'));
    let student_radioBtn=element(by.id('inlineRadio1'));
    let employed_radioBtn=element(by.id('inlineRadio2'));
    let birthDate_txtField =element(by.name('bday'));
    let submit_Btn=element(by.css('.btn.btn-success'));
    

    // Defining Action methods for the elements located
    this.enterName= function (name)
    {
        name_txtField.get(0).sendKeys(name);

    };

    this.enterEmail= function (email)
    {
        email_txtField.sendKeys(email);

    };
    this.enterPassword= function (password)
    {
        password_txtField.sendKeys(password);

    };

    this.checkIceCreamLover= function (flag)
    {
        if (flag==true)
        {
        iceCream_checkBox.click();
        }
    };

    this.selectGender= function (gender)
    {
        if (gender=="Female")
        {
            gender_List.element(by.cssContainingText('option',gender)).click();
        }

    };

    this.selectEmploymentStatus= function (employmentStatus)
    {
        if (employmentStatus=="Student")
        {
            student_radioBtn.click();

        }
        else if (employmentStatus="Employed")
        {
            employed_radioBtn.click();
        }

    };

    this.enterDateOfBirth = function (birthDate)
    {
        birthDate_txtField.sendKeys();
    };

    this.clickSubmitBtn = function ()
    {
        submit_Btn.click();
    };

    this.enterBindingNameField = function (secondName)
    {
        secondName_txtField.get(1).sendKeys(secondName);
    };

    this.verifyingSuccessMsg=function(successMsg)
    {
        let sucessMsg_Alert= element(by.css('.alert.alert-success')).getText();
        expect(sucessMsg_Alert).toContain(successMsg);
    };


    this.verifyingErrorMsgs= function(count , missingField)
    {
       let messageCount=0;
        if(missingField.includes("Name"))
        {
            expect(element(by.cssContainingText('div', 'Name is required')).isPresent()).toBe(true);
            messageCount++;
        }
        if(missingField.includes("Email"))
        {
            expect(element(by.cssContainingText('div', 'Email is required')).isPresent()).toBe(true);
            messageCount++;
        }
        expect(messageCount).toEqual(count);
        console.log (messageCount);
    };

};

module.exports =  new protoCommercePage;