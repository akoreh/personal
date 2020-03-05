import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { findIndex } from 'lodash';

import { tabOptions as homePageTabOptions} from './Pages/Home/HomePage';

import { selectOpenTabs, selectActiveTab } from '../../redux/browser/browser.selectors';
import { openTab, closeTab, setTabActive } from '../../redux/browser/browser.actions';

import { C } from '../../util';

import cls from './Browser.module.scss';
import Tab from './Tab';

const AppBrowser = ({ openTabs, activeTab, openTab, closeTab, setTabActive }) => {
    useEffect(() => {
        if (!openTabs.length) {
            openTab({...homePageTabOptions});
        }
    }, []);

    function onTabClose(tabId) {
        if (openTabs.length === 1) {
            //if we close the only open tab close the browser aswell
            closeTab(tabId);
            return;
        }
        
        const closedTabIndex = findIndex(openTabs, {id: tabId});
        
        if (openTabs[closedTabIndex + 1]) {
            //focus next tab
        } else {
            //focused the previous tab

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
});

const ConnectedBrowser = connect(mapStateToProps, mapDispatchToProps)(AppBrowser);

export const appOpts = {
    id: 'browser',
    content: <ConnectedBrowser />,
    type: 'app',
    title: 'Internet',
    style: {
        width: '70%',
        height: '80%',
    }
};

export default ConnectedBrowser;