const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pageobjects/login.page');
const OffersPage = require('../../pageobjects/offers.page');

Given('I am logged in to the MyTelenor app with valid credentials', async () => {
    // const username = '03405045207';
    // const password = 'telenor123';
    // await LoginPage.login(username, password);

    // const balanceAmount = await LoginPage.getBalanceAmount();
    // if (balanceAmount > 5) {
    //     await LoginPage.closePopup();
    // } else {
    //     console.log('Balance amount is below 6 rupees. Popup will not be closed.');
    // }
});

When('I navigate to the offers screen', async () => {
    await OffersPage.navigateToOffers();
});

// When('I handle the in-app notification', async () => {
//     await OffersPage.handleInAppNotification();
// });

When('I should select the tab', async () => {
    await OffersPage.selectTab();
});

When('I should activate the offer', async () => {
    await OffersPage.activateOffer();
    console.log('Offers test completed successfully!');
});
When('I should confirm the offer', async () => {
    await OffersPage.activateOffer();
    console.log('Offers test completed successfully!');
});
Then('I should show success screen', async () => {
    await OffersPage.displaysuccess();
    console.log('Offers test completed successfully!');
});
// Then('I should scroll and activate the Free Snapchat offer', async () => {
//     await OffersPage.scrollAndActivateOffer();
//     console.log('Free Snapchat offer activated successfully!');
// });