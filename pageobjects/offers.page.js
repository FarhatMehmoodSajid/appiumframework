const { $ } = require('@wdio/globals');
const Page = require('./page');

class OffersPage extends Page {
    get offersButton() { return $('(//android.widget.ImageView[@resource-id="com.telenor.pakistan.mytelenor:id/imgOffers"])[2]'); }
    //get inAppNotificationButton() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/collapse_button"]'); }
    // get offerstabButton() { return $('//android.widget.LinearLayout[@content-desc="Data"]'); }
    get offerstabButton() { return $('//android.widget.TextView[@text="CALL"]'); }
    get offerActivationButton() { return $('(//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btn_OfferActivation"])[1]'); }
    get offerConfirmationButton() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btnYes"]'); }
    get offersuccesstv() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_thankyou"]'); }

    // async offers(){
    //     await this.offersButton.click();
    //     await this.inAppNotificationButton.click();
    //     await this.offerstabButton.click();
    //     await this.offerActivationButton.click();
    //     await this.offerConfirmationButton.click();
    // }

    async navigateToOffers() {
        await this.offersButton.click();
    }

    // async handleInAppNotification() {
    //     await this.inAppNotificationButton.click();
    // }

    async selectTab() {
        await this.offerstabButton.click();
    }

   // async scrollAndActivateOffer() {
        // Scroll to the specific offer
        // const offerSelector = 'new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollIntoView(new UiSelector().resourceId("com.telenor.pakistan.mytelenor:id/tv_ChargeName").text("Free Snapchat"))';
        // const offerElement = await $(`android=${offerSelector}`);
        // await offerElement.click();
    //     const dataTabSelector = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Data"))';
    // await $(`android=${dataTabSelector}`).click(); // Click on the "Data" tab to ensure it's in view

    // Now scroll to the specific offer within the "Data" tab
    // const offerText = "Free Snapchat"; // Replace with your specific offer text
    // const offerSelector = `new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollIntoView(new UiSelector().text("${offerText}"))`;
    // const offerElement = await $(`android=${offerSelector}`);
    // await offerElement.click(); // Click on the offer
        // Activate the offer
        // await this.offerActivationButton.click();
        // await this.offerConfirmationButton.click();
   // }

    async activateOffer(){
        await this.offerActivationButton.click();
    }

    async confirmactivateOffer() {
       // await this.offerActivationButton.click();
        await this.offerConfirmationButton.click();
    }
    async displaysuccess(){
        await this.offersuccesstv.isDisplayed();
    }
    open () {
        return super.open('offers');
       // return super.open('offers');
    }
}

module.exports = new OffersPage();
