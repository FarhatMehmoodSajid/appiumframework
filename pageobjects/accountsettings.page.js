const { $ } = require('@wdio/globals');
const Page = require('./page');

class accountsettingspage extends Page{
    get hamburgerBtn() { return $('//android.widget.ImageView[@resource-id="com.telenor.pakistan.mytelenor:id/iv_menu"]'); }
    get openaccountsettingsbutton() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_menu_title" and @text="Account Settings"]'); }
    get editemail() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tvEdit"]'); }
    get editemailtext() { return $('//android.widget.EditText[@resource-id="com.telenor.pakistan.mytelenor:id/etEmailAddress"]'); }
    get submitButton() {return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btnSubmit"]');}

    

    async openhamburgermenu(){
        await this.hamburgerBtn.click();
        
    }
    async openaccountsettings(){
        await this.openaccountsettingsbutton.click();
    }
    async updateEmail(etEmailAddress){
        // await this.hamburgerBtn.click();
        // await this.accountsettings.click();
        await this.editemail.click();
        await this.editemailtext.setValue(etEmailAddress);
        await this.submitButton.click();

    }
    // open () {
    //     return super.open('./pageobjects/accountsettings');
    //    // return super.open('offers');
    // }



}
module.exports = new accountsettingspage();