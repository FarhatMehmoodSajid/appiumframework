const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pageobjects/login.page');
const FreeMbsPage = require('../../pageobjects/freembs.page');

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

When('I navigate to the Free MBs section', async () => {
    await FreeMbsPage.openfreembs();
});

Then('I should be able to claim Free MBs', async () => {
    await FreeMbsPage.freembsclaim();
    console.log('Free MBs claimed successfully!');
});
