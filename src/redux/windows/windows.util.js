import { filter, map, find, findIndex } from 'lodash';

const DEFAULT_OPTS = {
    type: 'folder', //folder / app
    isZoomed: false,
    width: '50%',
    height: '60%',
};

export const openWindow = (openWindows, appOpts) => {
    const windowAlreadyOpen = find(openWindows, openWindow => openWindow.id === appOpts.id);

    if (windowAlreadyOpen) {
        return openWindows;
    }

    return  [...openWindows, createNewWindow(appOpts)];
};

export const closeWindow = (openWindows, id) => filter(openWindows, openWindow => openWindow.id !== id);

export const toggleWindowZoom = (openWindows, id) => map(openWindows, openWindow => ({
    ...openWindow,
    isZoomed: openWindow.id === id ? !openWindow.isZoomed : false,
}));

export const setWindowFocused = (openWindows, id) => map(openWindows, openWindow => ({
    ...openWindow,
    isFocused: openWindow.id === id ? true : false,
}));

export const updateWindowDimensions = (openWindows, {id, width, height}) => {
    const windows = [...openWindows];
    const windowIndex = findIndex(windows, window => window.id === id);

    windows[windowIndex] = {...windows[windowIndex], width, height};

    return windows;
}

const createNewWindow = (appOpts) => ({
    ...DEFAULT_OPTS,
    ...appOpts
});