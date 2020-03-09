import WindowActionTypes from './windows.types';
import {
     openWindow, 
     closeWindow, 
     toggleWindowZoom, 
     setWindowFocused, 
     updateWindowDimensions
} from './windows.util';

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
        case WindowActionTypes.TOGGLE_WINDOW_ZOOM:
            return {
                ...state,
                openWindows: toggleWindowZoom(state.openWindows, action.payload),
            };
        case WindowActionTypes.SET_WINDOW_FOCUSED:
            return {
                ...state,
                openWindows: setWindowFocused(state.openWindows, action.payload),
            };
        case WindowActionTypes.UPDATE_WINDOW_DIMENSIONS:
            return {
                ...state,
                openWindows: updateWindowDimensions(state.openWindows, action.payload),
            }
        default:
            return state;
    }
};

export default windowsReducer;