const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pageobjects/login.page');
const OffersPage = require('../../pageobjects/offers.page');

Given('I am on the login page', async () => {
    // Assuming your app starts on the login screen
    // If not, navigate to the login screen here
    await LoginPage.open();
});

When('I login with valid credentials', async () => {
    const username = '03405045207';
    const password = 'telenor123';
    await LoginPage.login(username, password);
});
When('I should close Rtdm Popup', async()=>{
   // await browser.waitUntil(
    //     async () => await LoginPage.closeRTDMButton.isDisplayed(),
    //     {
    //         timeout: 10000,
    //         timeoutMsg: 'Expected popup to be displayed'
    //     }
    // );
    //await LoginPage.closePopup();
    const balance = await LoginPage.getBalanceAmount();
    if (balance > 6) {
        await LoginPage.closePopup();
    }
});

Then('I should close Home add', async () => {
  await LoginPage.closehomeadds();
    // await browser.waitUntil(
    //     async () => await LoginPage.closeOffersAd.isDisplayed(),
    //     {
    //         timeout: 10000,
    //         timeoutMsg: 'Expected offers ad to be displayed'
    //     }
    // );
    //await LoginPage.closePopup();
    // await expect(LoginPage.balanceAmountElement).toBeDisplayed();
    // await browser.waitUntil(
    //     async () => await LoginPage.balanceAmountElement.isDisplayed(),
    //     {
    //         timeout: 10000,
    //         timeoutMsg: 'Expected balance amount element to be displayed'
    //     }
    // );
});
//Given('I am logged in', async () => {
    // Reuse the login steps to ensure the user is logged in
//    try{ console.log('Reach here?');
//     await browser.waitUntil(
//         async () => await LoginPage.closeOffersAd.isDisplayed(),
//         {
//             timeout: 10000,
//             timeoutMsg: 'Expected offers ad to be displayed'
//         }
//     );
//     console.log('Offers ad is displayed');
//     await LoginPage.closePopupOffers();
//     console.log('Offers ad closed');
// } catch (error) {
//     console.error('Error during login and closing offers ad:', error);
// }


// console.log('Offers ad is displayed');
// await LoginPage.closePopupOffers();
// console.log('Offers ad closed');

// Wait for the offers ad to be closed and ensure the next screen is loaded
//await browser.pause(2000);
    // await browser.waitUntil(
    //     async () => await LoginPage.closeOffersAd.isDisplayed(),
    //     {
    //         timeout: 10000,
    //         timeoutMsg: 'Expected offers ad to be displayed'
    //     }
    // );
    // console.log('Reach here 1?')
    // await LoginPage.closePopupOffers();
    // await LoginPage.closePopupoffers();
  
//});

// When('I navigate to the offers screen', async () => {
//     await OffersPage.open();
//     console.log('Reach here 2?')
// });

// Then('I should see the offers', async () => {
//     await browser.waitUntil(
//         async () => await OffersPage.offersButton.isDisplayed(),
//         {
//             timeout: 10000,
//             timeoutMsg: 'Expected offers button to be displayed'
//         }
//     );
//     await expect(OffersPage.offersButton).toBeDisplayed();
// });
