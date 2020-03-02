import React, { useState } from 'react';

import NewTab from './NewTab';

import { C } from '../../util';

import cls from './Browser.module.scss';

const DEFAULT_TAB = {
    label: 'New Tab',
    content: <NewTab />
};

const AppBrowser = ({ tabs = [DEFAULT_TAB, DEFAULT_TAB, DEFAULT_TAB] }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return <div className={cls.browser}>
        <div className={cls.tabs}>
            {tabs.map((tab, index) => (
                <div className={C( cls.tab, tab === activeTab && cls.active)}>
                    <span className={cls.tabLabel}>{tab.label}</span>
                </div>
            ))}
        </div>
        <div className={cls.toolbar}></div>
        <div className={cls.bookmarks}></div>
    </div>;
};

export const appOpts = {
    id: 'browser',
    content: <AppBrowser />,
    type: 'app',
    title: 'Internet',
    style: {
        width: '70%',
        height: '80%',
    }
};

export default AppBrowser;