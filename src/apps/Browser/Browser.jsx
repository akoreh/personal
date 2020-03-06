/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { findIndex } from 'lodash';

import { tabOptions as homePageTabOptions} from './Pages/Home/HomePage';

import { selectOpenTabs, selectActiveTab } from '../../redux/browser/browser.selectors';
import { openTab, closeTab, setTabActive } from '../../redux/browser/browser.actions';
import { closeWindow } from '../../redux/windows/windows.actions';

import cls from './Browser.module.scss';
import Tab from './Tab';

const APP_ID = 'browser';

const AppBrowser = ({ openTabs, activeTab, openTab, closeTab, setTabActive, closeWindow }) => {
    useEffect(() => {
        if (!openTabs.length) {
            openHomePageTab();
        }
    }, []);

    function openHomePageTab() {
        openTab({...homePageTabOptions});
    }

    function onTabClose(tabId) {
        closeTab(tabId);

        if (openTabs.length > 1) {
            const closedTabIndex = findIndex(openTabs, {id: tabId});
            const nextTab = openTabs[closedTabIndex + 1];
            const previousTab = openTabs[closedTabIndex - 1];

            nextTab ? setTabActive(nextTab.id) : setTabActive(previousTab.id);
        } else {
            //if we close the only open tab close the browser aswell
            closeWindow(APP_ID);
        }
    }

    return <div className={cls.browser}>
        <div className={cls.tabs}>
            {openTabs.map(tab => <Tab 
                key={tab.id} 
                tab={tab} 
                isActive={activeTab && activeTab.id === tab.id}
                onClick={setTabActive.bind(null, tab.id)}
                onClose={onTabClose.bind(null, tab.id)}
            />)}
        </div>
        <div className={cls.toolbar}></div>
        <div className={cls.bookmarks}></div>
        <div className={cls.viewport}>
            {activeTab && activeTab.content}
        </div>
    </div>;
};

const mapStateToProps = createStructuredSelector({
    openTabs: selectOpenTabs,
    activeTab: selectActiveTab,
});

const mapDispatchToProps = dispatch => ({
    openTab: tabOptions => dispatch(openTab(tabOptions)),
    closeTab: id => dispatch(closeTab(id)),
    setTabActive: id => dispatch(setTabActive(id)),
    closeWindow: id => dispatch(closeWindow(id)),
});

const ConnectedBrowser = connect(mapStateToProps, mapDispatchToProps)(AppBrowser);

export const appOpts = {
    id: APP_ID,
    content: <ConnectedBrowser />,
    type: 'app',
    title: 'Internet',
    width: '70%',
    height: '80%',
};

export default ConnectedBrowser;