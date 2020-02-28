import React, { createContext, useState } from 'react';
import { filter, map, find } from 'lodash';
import uuid from 'uuid/v1';

/**
 * Window
 * @typedef {Object} Window
 * @property {string} id - uuid
 * @property {JSXElement} content
 * @property {Object} style - css style definitions for the window
 * @property {boolean} isContentApp
 */

/**
 * App Settings
 * @typedef {Object} AppSettings
 * @property {string} appIdentifier - uniquely identifies an app (so you dont open it twice for example)
 * @property {string} width - css property, width of window
 * @property {string} height - css property, height of window
 * @property {boolean} isContentApp - if content is app the style of the window will be affected, the opposite is a folder
 */

export const windowsContext = createContext();

const WindowsProvider = ({ children }) => {
    const [windows, setWindows] = useState([]);

    /**
     * Open a new window, for either a folder or an app
     * @param {JSXElement} content content component
     * @param {AppSettings} appSettings  
     */
    const openWindow = (content, { width = '50%', height="60%", ...appSettings}) => {
        const windowAlreadyOpen = find(windows, ({appIdentifier}) => appIdentifier === appSettings.appIdentifier);

        if (!windowAlreadyOpen) {
            setWindows([...windows, {
                id: uuid(),
                content,
                style: {
                    width,
                    height,
                    zIndex: 500
                },
                ...appSettings
            }]);
        }
    };

    /**
     * Close an open window
     * @param {string} windowId 
     */
    const closeWindow = windowId => setWindows(filter(windows, ({ id }) => id !== windowId));

    /**
     * Toggle maximization of a window
     * @param {string} windowId 
     */
    const maximizeWindow = windowId => setWindows(map(windows, window => ({
            ...window,
            isMaximized: window.id === windowId ? !window.isMaximized : window.isMaximized
    })));

    /**
     * Returns first maximized window
     * @returns {Window} 
     */
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
