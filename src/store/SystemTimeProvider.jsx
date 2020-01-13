import React, { createContext, useState, useEffect } from 'react';

export const systemTimeContext = createContext();

const SystemTimeProvider = ({ children }) => {
    const [systemTime, setSystemTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setSystemTime(new Date()), 1000);
    }, []);

    return <systemTimeContext.Provider value={systemTime}>
        {children}
    </systemTimeContext.Provider>
};

export default SystemTimeProvider;
