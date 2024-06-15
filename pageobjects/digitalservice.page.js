const { $ } = require('@wdio/globals');
const Page = require('./page');

class DigitalServicePage extends Page{
    get hamburgerBtn1() { return $('//android.widget.ImageView[@resource-id="com.telenor.pakistan.mytelenor:id/iv_menu"]'); }
    get digitalserviceBtn() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_menu_title" and @text="Digital Services"]'); }
    get allservicesBtn() { return $('//android.widget.TextView[@text="ALL SERVICES"]'); }
    get musicBtn() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_digitalServiceName" and @text="Music & Video"]'); }
    get serviceDetailsBtn() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_digitalServicesubDetails" and @text="Telenor SmartTunes lets your friends and family listen to your favorite tune every time they call you"]'); }
    get activateBtn() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btn_activateDigitalService"]'); }
    get offerConfirmationButton() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btnYes"]'); }
    get offersuccesstv() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_thankyou"]'); }
    
    async openhamburgeron(){

        await this.hamburgerBtn1.click();
    }
    async opendigitalservice(){
        await this.digitalserviceBtn.click();
    }
    async openallservices(){
        await this.allservicesBtn.click();
    }
    async openmusic(){
        await this.musicBtn.click();
    }
    async openservice(){
        await this.serviceDetailsBtn.click();
    }
    async activateservice(){
        await this.activateBtn.click();
    }
    async confirmserviceactivation(){
    await this.offerConfirmationButton.click();
    }
    async displaysuccessservice(){
        await this.offersuccesstv.isDisplayed();
    }
}
module.exports = new DigitalServicePage();