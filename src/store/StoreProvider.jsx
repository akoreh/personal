import React from 'react';

import SystemTimeProvider from './SystemTimeProvider';

const StoreProvider = ({children}) => (
    <SystemTimeProvider>
        {children}
    </SystemTimeProvider>
);

export default StoreProvider;
