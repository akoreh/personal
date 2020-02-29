import { createSelector } from 'reselect';
import { find } from 'lodash';

const selectWindows = state => state.windows;

export const selectOpenWindows = createSelector(
    [selectWindows],
    windows => windows.openWindows
);

export const selectMaximizedWindow = createSelector(
    [selectOpenWindows],
    openWindows => find(openWindows, 'isMaximized')
);