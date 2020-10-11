import Page from './page';

class SearchPage extends Page {
    // const searchInput = $('#gh-ac');
    // const searchBtn = $('#gh-btn');

    get searchInput() {
        return $('#gh-ac');
    }

    get searchBtn() {
        return $('#gh-btn');
    }

    get category() {
        return $('#gh-cat option:nth-child(1)');
    }

    open() {
        super.open('/');
    }
}

export default new SearchPage();
