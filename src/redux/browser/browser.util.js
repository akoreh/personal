import { map, filter } from 'lodash';
import uuid from 'uuid/v1';

export const openTab = (openTabs, tabOptions) => {
    const inactiveTabs = map(openTabs, tab => ({...tab, isActive: false}));

    return [...inactiveTabs, {
        ...tabOptions,
        id: uuid(),
        isActive: true,
    }];
};

export const closeTab = (openTabs, id) => filter(openTabs, tab => tab.id !== id);

export const setTabActive = (openTabs, id) => map(openTabs, tab => ({
    ...tab,
    isActive: tab.id === id,
}));