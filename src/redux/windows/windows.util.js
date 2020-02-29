import { filter, map, find } from 'lodash';

const DEFAULT_OPTS = {
    type: 'folder', //folder / app
    isMaximized: false,
    style: {
        width: '50%',
        height: '60%',
    },
};

export const openWindow = (openWindows, appOpts) => {
    const windowAlreadyOpen = find(openWindows, openWindow => openWindow.id === appOpts.id);

    if (windowAlreadyOpen) {
        return openWindows;
    }

    return  [...openWindows, createNewWindow(appOpts)];
};

export const closeWindow = (openWindows, id) => filter(openWindows, openWindow => openWindow.id !== id);

export const toggleWindowMaximized = (openWindows, id) => map(openWindows, openWindow => ({
    ...openWindow,
    isMaximized: openWindow.id === id ? !openWindow.isMaximized : false,
}));

export const setWindowFocused = (openWindows, id) => map(openWindows, openWindow => ({
    ...openWindow,
    isFocused: openWindow.id === id ? true : false,
}));

const createNewWindow = (appOpts) => ({
    ...DEFAULT_OPTS,
    ...appOpts
});