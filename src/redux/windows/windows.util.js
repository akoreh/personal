import { filter, map, find } from 'lodash';
import uuid from 'uuid/v1';

const DEFAULT_OPTS = {
    type: 'folder', //folder / app
    isMaximized: false,
    style: {
        width: '50%',
        height: '60%',
    },
};

export const openWindow = (openWindows, appOpts) => {
    const windowAlreadyOpen = find(openWindows, openWindow => openWindow.appIdentifier === appOpts.appIdentifier);

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

const createNewWindow = (appOpts) => ({
    id: uuid(),
    ...DEFAULT_OPTS,
    ...appOpts
});