const { Given, When, Then } = require('@wdio/cucumber-framework');
const accountsettingspage = require('../../pageobjects/accountsettings.page');

Given('I am on the home screen', async () => {
    // Assuming your app starts on the login screen
    // If not, navigate to the login screen here
    await accountsettingspage.open();
});

When('I nagivate to hamburger menu', async () => {
    await accountsettingspage.openhamburgermenu();
});

When('I navigate to account Settings', async () => {
    await accountsettingspage.openaccountsettings();
});
Then('I click edit email and update the email', async () => {
    const etEmailAddress = 'farhatmsajid1@gmail.com';
    await accountsettingspage.updateEmail(etEmailAddress);
    //await accountsettingspage.submitButton();
});
// Then('I update the email', async () => {
//     await accountsettingspage.openaccountsettings();
// });