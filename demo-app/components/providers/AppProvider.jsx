'use client';

import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
};

export const AppProvider = ({ children, initialActiveBorrower = null }) => {
    const [activeTab, setActiveTab] = useState('new');
    const [activeBorrower, setActiveBorrower] = useState(initialActiveBorrower);
    const [radioSelection, setRadioSelection] = useState('Option A');

    const contextValue = {
        activeTab,
        setActiveTab,
        activeBorrower,
        setActiveBorrower,
        radioSelection,
        setRadioSelection,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
