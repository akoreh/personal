import { filter } from 'lodash';

export const openTab = (openTabs, tabOptions) => [...openTabs, {...tabOptions}];

export const closeTab = (openTabs, id) => filter(openTabs, tab => tab.id !== id);