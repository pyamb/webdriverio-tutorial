import SearchPage from '../pages/search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter'


/*
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})
*/

describe('Ebay Product Search', () => {
    it ('should open the main url and verify the title', () => {
        // browser.url('https://www.ebay.com/'); // driver.get()
        SearchPage.open();
        expect(browser).toHaveTitle(resources.homeTitle); // check title of page
    });

    it ('should search for a product and verify the search text value', () => {
        /*
        // CSS selectors
        const searchInput = $('#gh-ac');
        const searchBtn = $('#gh-btn');

        searchInput.addValue('Laptop'); // add text to search bar
        searchBtn.click();

        expect(searchInput).toHaveValue('Laptop');
        */
       allureReporter.addSeverity('Critical');
       SearchPage.searchInput.addValue('Laptop');
       SearchPage.searchBtn.click();

       expect(SearchPage.searchInput).toHaveValue('Laptop');
    });

    it ('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle(resources.laptopTitle);
    });

    it ('should update the search category', () => {
        allureReporter.addFeature('search category');
        /* const category = $('#gh-cat option:nth-child(1)');
        browser.waitUntil(
            function() {
                return SearchPage.category.getText() === 'PC Laptops & Netbooks';
            },
            { timeout: 5000 }
        );
        */
        waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 3000);
        expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
    });
})