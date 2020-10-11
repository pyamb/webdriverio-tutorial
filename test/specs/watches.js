import { expect as chaiExpect} from 'chai';
import WatchesPage from '../pages/watches.page';
import { waitAndClick } from '../utilities/helper';
import resources from '../resources';

describe('Watches Page', () => {
    before(() => { // there's also beforeEach
        WatchesPage.open(); 
        WatchesPage.fashionLink.moveTo();
        /*
        browser.pause(1000); // explicit wait, pause the full 1 sec
        WatchesPage.watchesLink.waitForDisplayed({ timeout: 3000});
        WatchesPage.watchesLink.click();
        */
       waitAndClick(WatchesPage.watchesLink, 3000);
    })

    /*
    after(() => {
        browser.url('https://ebay.com'); 
    })

    afterEach(() => {
        browser.refresh();
    });
    */

    it('should verify the watches category list', () => {
        const watchesCategoryList = WatchesPage.getWatchesCategoryListText();
        chaiExpect(watchesCategoryList).to.deep.equal(resources.watchesCategoryList);
    });

    it('should show the banner container', () => {
        /*
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner = $('section.b-promobanner');
        expect(promoBanner).toBeDisplayed(); // banner is displayed
        */
       expect(WatchesPage.promoBanner).toBeDisplayed();
    });

    it('should show the banner title', () => {
        /*
        const infoTitle = $('.b-promobanner__info-title');
        expect(infoTitle).toHaveTextContaining('A gift that says'); // .text contains text
        */
       expect(WatchesPage.infoTitle).toHaveTextContaining('Make every second'); // could change
    });

    it('should contain link on banner button and verify its clickable', () => {
        /*
        const shopButton = $('.b-promobanner__info-btn');
        expect(shopButton).toHaveLinkContaining('/fashion/'); // link associated should contain fashion
        expect(shopButton).toBeClickable();
        */
       expect(WatchesPage.shopButton).toHaveLinkContaining('/fashion/');
       expect(WatchesPage.shopButton).toBeClickable();
    });

    it('should click on the shop button and verify the new URL', () => {
        /*
        const shopButton = $('.b-promobanner__info-btn');
        shopButton.click()
        const url = browser.getUrl(); // get current URL of page
        // chai assertion
        chaiExpect(url).to.include('/fashion/');
        expect(browser).toHaveUrl(
            'https://www.ebay.com/e/fashion/top-giftable-watches-under-500-100520'
        );
        */
        WatchesPage.shopButton.click()
        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
    });
});