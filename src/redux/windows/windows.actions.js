import WindowActionTypes from './windows.types';

export const openWindow = appOpts => ({
    type: WindowActionTypes.OPEN_WINDOW,
    payload: appOpts,
});

export const closeWindow = id => ({
    type: WindowActionTypes.CLOSE_WINDOW,
    payload: id,
});

export const toggleWindowZoom = id => ({
    type: WindowActionTypes.TOGGLE_WINDOW_ZOOM,
    payload: id,
});

export const setWindowFocused = id => ({
    type: WindowActionTypes.SET_WINDOW_FOCUSED,
    payload: id,
});

export const openWindowAndSetFocused = appOpts => {
    return dispatch => {
        dispatch(openWindow(appOpts));
        dispatch(setWindowFocused(appOpts.id));
    };
};

export const updateWindowDimensions = (id, width, height) => ({
    type: WindowActionTypes.UPDATE_WINDOW_DIMENSIONS,
    payload: {id, width, height},
});