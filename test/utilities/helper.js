export const waitForTextChange = (el, text, timeout) => {
    browser.waitUntil(
        function() {
            // console.log('XXXXXXXXXXXXXXXXX ' + el.getText());
            return el.getText() == text;
        },
        { timeout }
    );
};

export const waitAndClick = (el, timeout) => {
    el.waitForDisplayed({ timeout });
    el.click();
};