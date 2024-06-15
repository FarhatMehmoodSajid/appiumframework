const { $ } = require('@wdio/globals');
const Page = require('./page');

class LoginPage extends Page {
    get signinWithAnotherBtn() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/txtSignAnother"]'); }
    get usernameField() { return $('//android.widget.EditText[@resource-id="com.telenor.pakistan.mytelenor:id/etMobileNo"]'); }
    get loginButton1() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btnSignIn"]'); }
    get passwordField() { return $('//android.widget.EditText[@resource-id="com.telenor.pakistan.mytelenor:id/txtPassword"]'); }
    get loginButton() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btnSignIn"]'); }
    get balanceAmountElement() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_amount"]'); }
    get closeRTDMButton() { return $('//android.widget.ImageView[@resource-id="com.telenor.pakistan.mytelenor:id/iv_cross"]'); }
    //get closeoffersadd() { return $('//android.widget.Image'); }
    get closehomeadd() { return $('//android.widget.Image[@text="image"]'); }

    async login(username, password) {
        await this.signinWithAnotherBtn.click();
        await this.usernameField.setValue(username);
        await this.loginButton1.click();
        await this.passwordField.setValue(password);
        await this.loginButton.click();
        // await this.balanceAmountElement.isDisplayed();
        // await this.closeRTDMButton.click();
        // await this.closeoffersadd.click();
    }

    async getBalanceAmount() {
        const balanceAmountText = await this.balanceAmountElement.getText();
        return parseFloat(balanceAmountText.replace('Rs.', '').trim());
    }

    async closePopup() {
        await this.closeRTDMButton.click();
    }

    // async closePopup() {
    //     await this.closeoffersadd.click();
    // }
    async closehomeadds(){
        try {
            if (await this.closehomeadd.isDisplayed()) {
                await this.closehomeadd.click();
            }
        } catch (error) {
            // Ignore if the element is not found
        }
    }

    open () {
        return super.open('./pageobjects/login');
       // return super.open('offers');
    }
}

module.exports = new LoginPage();
