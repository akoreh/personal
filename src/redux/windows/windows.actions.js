import { find } from 'lodash';

import WindowActionTypes from './windows.types';

export const openWindow = appOpts => ({
    type: WindowActionTypes.OPEN_WINDOW,
    payload: appOpts,
});

export const closeWindow = id => ({
    type: WindowActionTypes.CLOSE_WINDOW,
    payload: id,
});

export const toggleWindowMinimized = id => ({
    type: WindowActionTypes.TOGGLE_WINDOW_MINIMIZED,
    payload: id,
});

export const toggleWindowZoom = id => ({
    type: WindowActionTypes.TOGGLE_WINDOW_ZOOM,
    payload: id,
});

/**
 * Update the dimensions of a window
 * @param {string} id 
 * @param {object} dimensions
 * @param {number} [dimensions.x]
 * @param {number} [dimensions.y]
 * @param {number} [dimensions.width]
 * @param {number} [dimensions.height] - in pixels 
 */
export const updateWindowDimensions = (id, dimensions) => ({
    type: WindowActionTypes.UPDATE_WINDOW_DIMENSIONS,
    payload: {id, dimensions},
});

export const setWindowFocused = id => (dispatch, getState) => {
    const state = getState();
    const window = find(state.windows.openWindows, { id: id });

    if (window.isMinimized) {
        dispatch(toggleWindowMinimized(id));
    }

    dispatch({
        type: WindowActionTypes.SET_WINDOW_FOCUSED,
        payload: id,
    });
}

export const openWindowAndSetFocused = appOpts => {
    return dispatch => {
        dispatch(openWindow(appOpts));
        dispatch(setWindowFocused(appOpts.id));
    };
};