const { Given, When, Then } = require('@wdio/cucumber-framework');
const DigitalServicePage = require('../../pageobjects/digitalservice.page');

Given('I am logged in to the MyTelenor app with valid credentials', async () => {
    // const username = '03405045207';
    // const password = 'telenor123';
    // await LoginPage.login(username, password);

    // const balanceAmount = await LoginPage.getBalanceAmount();
    // if (balanceAmount > 6) {
    //     await LoginPage.closePopup();
    // } else {
    //     console.log('Balance amount is below 6 rupees. Popup will not be closed.');
    // }
});
When('I open the hamburger menu', async () => {
    await DigitalServicePage.openhamburgeron();
});

When('I navigate to Digital Services', async () => {
    await DigitalServicePage.opendigitalservice();
});

When('I open all services', async () => {
    await DigitalServicePage.openallservices();
});

When('I select Music & Video', async () => {
    await DigitalServicePage.openmusic();
});

When('I open the service details for SmartTunes', async () => {
    await DigitalServicePage.openservice();
});

When('I should be able to activate the service', async () => {
    await DigitalServicePage.activateservice();
    console.log('Service activated successfully!');
});
When('I should confirm service activation', async () => {
    await DigitalServicePage.confirmserviceactivation();
    console.log('Service activated successfully!');
});
Then('Success screen should display', async () => {
    await DigitalServicePage.displaysuccessservice();
    console.log('Service activated successfully!');
});
