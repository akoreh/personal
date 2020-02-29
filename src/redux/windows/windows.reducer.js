import WindowActionTypes from './windows.types';
import { openWindow, closeWindow, toggleWindowMaximized } from './windows.util';

const INITIAL_STATE = {
    openWindows: [],
};

const windowsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WindowActionTypes.OPEN_WINDOW:
            return {
                ...state,
                openWindows: openWindow(state.openWindows, action.payload),
            };
        case WindowActionTypes.CLOSE_WINDOW:
            return {
                ...state,
                openWindows: closeWindow(state.openWindows, action.payload),
            };
        case WindowActionTypes.TOGGLE_WINDOW_MAXIMIZED:
            return {
                ...state,
                openWindows: toggleWindowMaximized(state.openWindows, action.payload),
            }
        default:
            return state;
    }
};

export default windowsReducer;