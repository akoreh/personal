import { find } from 'lodash';

import BrowserActionTypes from './browser.types';
import { openWindowAndSetFocused, setWindowFocused } from '../windows/windows.actions';

import { appOpts as browserAppOpts } from '../../apps/Browser/Browser';

export const openTab = tabOptions => (dispatch, getState) => {
    const state = getState();
    
    const browserWindow = find(state.windows.openWindows, { id: browserAppOpts.id });

    if (!browserWindow) {
        dispatch(openWindowAndSetFocused(browserAppOpts));
    } else if (!browserWindow.isFocused) {
        dispatch(setWindowFocused(browserWindow.id));
    }

    dispatch({
        type: BrowserActionTypes.OPEN_TAB,
        payload: tabOptions,
    });
}

export const closeTab = id => ({
    type: BrowserActionTypes.CLOSE_TAB,
    payload: id
});

export const setTabFocused = id => ({
    type: BrowserActionTypes.SET_TAB_FOCUSED,
    payload: id
});