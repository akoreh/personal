import BrowserActionTypes from './browser.types';
import { openTab, closeTab } from './browser.util';

const initialState = {
    openTabs: [],
};

const browserReducer = (state = initialState, action) => {
    switch (action.type) {
        case BrowserActionTypes.OPEN_TAB:
            return {
                ...state,
                openTabs: openTab(state.openTabs, action.payload),
            };
        case BrowserActionTypes.CLOSE_TAB:
            return {
                ...state,
                openTabs: closeTab(state.openTabs, action.payload),
            };
        default:
            return state;
    }
};

export default browserReducer;