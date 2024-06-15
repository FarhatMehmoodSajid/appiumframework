// const { Given, When, Then } = require('cucumber');
const { Given, When, Then } = require('@wdio/cucumber-framework');
const rechargescratchcardPage = require('../../pageobjects/rechargescratchcard.page');
// const rechargescratchcard = require('../../pageobjects/rechargescratchcard.page');
// const rechargescratchcard = require('../pageobjects/rechargescratchcard.page');

Given('I open the app', async () => {
    // This step might involve launching the app or navigating to a specific starting point
    // Example: Implement logic to launch the app
});

When('I navigate to the recharge screen', async () => {
    await rechargescratchcardPage.openrecharge();
});

When('I open the scratch card tab', async () => {
    await rechargescratchcardPage.openscratchtab();
});

Then('I should enter the scratch card input field and submit', async () => {
   const etScrachCardNumber = '12345678912345';
   await rechargescratchcardPage.submitscracthcard(etScrachCardNumber);
});