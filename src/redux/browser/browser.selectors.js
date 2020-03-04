import { createSelector } from 'reselect';

const selectBrowser = store => store.browser;

export const selectOpenTabs = createSelector(
    [selectBrowser],
    browser => browser.openTabs
);