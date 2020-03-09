import { createSelector } from 'reselect';
import { find, filter } from 'lodash';

export const selectWindows = state => state.windows;

export const selectOpenWindows = createSelector(
    [selectWindows],
    windows => windows.openWindows
);

export const selectOpenApps = createSelector(
    [selectOpenWindows],
    openWindows => filter(openWindows, {type: 'app'})
);

export const selectOpenFolders = createSelector(
    [selectOpenWindows],
    openWindows => filter(openWindows, {type: 'folder'})
);

export const selectZoomedWindow = createSelector(
    [selectOpenWindows],
    openWindows => find(openWindows, openWindow => openWindow.isZoomed && !openWindow.isMinimized)
);