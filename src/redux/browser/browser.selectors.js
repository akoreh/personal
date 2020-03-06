import { createSelector } from 'reselect';
import { find } from 'lodash';

const selectBrowser = store => store.browser;

export const selectOpenTabs = createSelector(
    [selectBrowser],
    browser => browser.openTabs
);

export const selectActiveTab = createSelector(
    [selectOpenTabs],
    tabs => find(tabs, 'isActive')
);