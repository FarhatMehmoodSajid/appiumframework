const { $ } = require('@wdio/globals');
const Page = require('./page');

class rechargescratchcardPage extends Page{
    get rechargeBtn() { return $('//android.widget.ImageView[@resource-id="com.telenor.pakistan.mytelenor:id/iv_recharge"]'); }
    get scratchtabBtn() { return $('//android.widget.TextView[@text="Scratch Card"]'); }
    get scratchcardtext() { return $('//android.widget.EditText[@resource-id="com.telenor.pakistan.mytelenor:id/etScrachCardNumber"]'); }
    get submitscratchBtn() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/submit"]'); }

    async openrecharge() {
        await this.rechargeBtn.click();
    }
    async openscratchtab() {
        await this.scratchtabBtn.click();
    }
    async submitscracthcard(etScrachCardNumber){
        await this.scratchcardtext.setValue(etScrachCardNumber);
        await this.submitscratchBtn.click();
    }
}
module.exports = new rechargescratchcardPage();