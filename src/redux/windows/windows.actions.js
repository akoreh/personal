import WindowActionTypes from './windows.types';

export const openWindow = appOpts => ({
    type: WindowActionTypes.OPEN_WINDOW,
    payload: appOpts,
});

export const closeWindow = id => ({
    type: WindowActionTypes.CLOSE_WINDOW,
    payload: id,
});

export const toggleWindowMaximized = id => ({
    type: WindowActionTypes.TOGGLE_WINDOW_MAXIMIZED,
    payload: id,
});