import React, { createContext, useState, useEffect } from 'react';

export const windowsContext = createContext();

const WindowsProvider = ({ children }) => {
    const [windows, setWindows] = useState([]);

    const openWindow = (title, content, width, height) => {
    };

    return <windowsContext.Provider value={windows}>
        {children}
    </windowsContext.Provider>
};

export default WindowsProvider;
