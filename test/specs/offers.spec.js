// const LoginPage = require('../pageobjects/login.page');
// const OffersPage = require('../pageobjects/offers.page');

// describe('Offers Test', () => {
//     before(async () => {
//         const username = '03405045207';
//         const password = 'telenor123';
//         await LoginPage.login(username, password);

//         const balanceAmount = await LoginPage.getBalanceAmount();
//         if (balanceAmount > 5) {
//             await LoginPage.closePopup();
//         } else {
//             console.log('Balance amount is below 6 rupees. Popup will not be closed.');
//         }
//     });

//     it('should navigate to offers and activate an offer', async () => {
//         await OffersPage.navigateToOffers();
//         await OffersPage.handleInAppNotification();
//         await OffersPage.selectDataTab();
//         await OffersPage.activateOffer();

//         console.log('Offers test completed successfully!');
//     });
// });