import { expect as chaiExpect, assert} from 'chai';
// where did this come from? const { expect } = require("chai");
import 'chai/register-should';

xdescribe('Watches Page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner = $('section.b-promobanner');
        expect(promoBanner).toBeDisplayed(); // banner is displayed
    });

    it('should show the banner title', () => {
        const infoTitle = $('.b-promobanner__info-title');
        const infoTitleText = infoTitle.getText();
        // expect(infoTitle).toHaveTextContaining('A gift that says'); // .text contains text
        chaiExpect(infoTitleText).to.not.be.empty; // no brackets for asserts in chai
        infoTitle.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    });

    it('should contain link on banner button and verify its clickable', () => {
        const shopButton = $('.b-promobanner__info-btn');
        const tag = shopButton.getTagName();

        expect(shopButton).toHaveLinkContaining('/fashion/'); // link associated should contain fashion
        expect(shopButton).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    it('should click on the shop button and verify the new URL', () => {
        const shopButton = $('.b-promobanner__info-btn');
        shopButton.click()
        const url = browser.getUrl(); // get current URL of page
        // chai assertion
        chaiExpect(url).to.include('/fashion/');
        expect(browser).toHaveUrl(
            'https://www.ebay.com/e/fashion/top-giftable-watches-under-500-100520'
        );   
    });
});