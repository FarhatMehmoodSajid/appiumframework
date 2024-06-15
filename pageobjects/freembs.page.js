const { $ } = require('@wdio/globals');
const Page = require('./page');

class FreeMbsPage extends Page{

    get freembsbtn() { return $('//android.widget.TextView[@resource-id="com.telenor.pakistan.mytelenor:id/tv_title" and @text="Free MBs"]'); }
    get freembsclaimbtn() { return $('//android.widget.Button[@resource-id="com.telenor.pakistan.mytelenor:id/btn_claim"]'); }

    async openfreembs(){
        await this.freembsbtn.click();
    }
    async freembsclaim(){
        await this.freembsclaimbtn.click();
    }
    
}
module.exports = new FreeMbsPage();