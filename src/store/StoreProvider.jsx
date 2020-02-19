import React from 'react';

import SystemTimeProvider from './SystemTimeProvider';
import WindowsProvider from './WindowsProvider';

const StoreProvider = ({children}) => (
    <SystemTimeProvider>
        <WindowsProvider>
            {children}
        </WindowsProvider>
    </SystemTimeProvider>
);

export default StoreProvider;
