import React, { createContext, useState } from 'react';
import { filter, map, find } from 'lodash';
import uuid from 'uuid/v1';

export const windowsContext = createContext();

const WindowsProvider = ({ children }) => {
    const [windows, setWindows] = useState([]);

    const openWindow = (title, content, width, height) => {
        setWindows([...windows, {
            id: uuid(),
            title,
            content
        }]);
    };

    const closeWindow = windowId => setWindows(filter(windows, ({ id }) => id !== windowId));

    const maximizeWindow = windowId => setWindows(map(windows, window => ({
            ...window,
            isMaximized: window.id === windowId ? !window.isMaximized : window.isMaximized
    })));

    const getMaximizedWindow = () => find(windows, 'isMaximized');

    return <windowsContext.Provider value={{
        windows,
        getMaximizedWindow,
        
        openWindow,
        closeWindow,
        maximizeWindow
    }}>
        {children}
    </windowsContext.Provider>
};

export default WindowsProvider;
